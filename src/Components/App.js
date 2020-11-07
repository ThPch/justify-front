import React from 'react';
import './App.css';
import axios from 'axios';
import LoginForm from './Login/LoginForm';
import UsersList from './User/UsersList'

class App extends React.Component {
  constructor(props){
    super(props);
    this.state = {
      users : [],
      currentUser : {}
    } 

    //Way to make sure that we can use this on a class
    this.updateCurrentUser = this.updateCurrentUser.bind(this);
  }

  //When the component is mounted, we're gonna fetch the data from the API
  componentDidMount(){
    const url = 'http://localhost:5000/api/users'

    axios.get(url, { 
      headers : {
        "Access-Control-Allow-Origin": "*"
      },
      crossdomain: true
      })
      .then((res) => {
        
        this.setState({
          users : res.data
        })
      })
      .catch((err) => {
        console.log(err);
      })
  }

  updateCurrentUser(item){
    this.setState({
      currentUser : item
    })
  }

  render () {
    return (
      <div className="container-fluid">
        <div className="row">
          <div className="col s12">Menu</div>
        </div>
        <div className="row">
          <div className="col s3">
            <UsersList users={this.state.users}
          updateCurrentUser={this.updateCurrentUser}/>
          </div>
        </div>
        <div className="row">
          <div className="col s12"><LoginForm/></div>
        </div>
      </div>
    );
    }
}

export default App;

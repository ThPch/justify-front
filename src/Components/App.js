import React from 'react';
import './App.css';
import axios from 'axios';
import LoginForm from './Login/LoginForm';

class App extends React.Component {
  constructor(props){
    super(props);
    this.state = {
      currentUser : {}
    } 

    //Way to make sure that we can use this on a class
    this.updateCurrentUser = this.updateCurrentUser.bind(this);
  }

  //When the component is mounted, we're gonna fetch the data from the API
  componentDidMount(){
    const url = 'http://localhost:5000/home'

    axios.get(url)
      .then((res) => {
        this.setState({
          //Do some
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
        <div>
          <LoginForm/>
        </div>
      </div>
    );
    }
}

export default App;

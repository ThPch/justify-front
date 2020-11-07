import React from 'react';
import './App.css';
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

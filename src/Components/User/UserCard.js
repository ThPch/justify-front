import React from 'react';
import axios from 'axios';

class UserCard extends React.Component {
    constructor(props){
      super(props)
      this.state = {
          accessToken: "",
          currentUser : {}
      }

      this.submitForm = this.submitForm.bind(this);
      if(props){
        // console.log(props) 
      }
     
  }

  submitForm = async (event) => {
      event.preventDefault();
      let accessToken;
      //console.log(this.state.currentUser)
      console.log(this.props)
      
      try{
          const response = await axios.post('http://localhost:5000/api/token',
          {
            "email": "tictac@trip.com",
            "password": "voyage2020"
          },
            {
              headers: {
              'Content-Type': 'application/json'
              }
            }
          )
          
          let accessToken = await response.data.accessToken
          this.setState({ accessToken: this.state.accessToken })
      }
      catch(err){
          console.log(err)
      }
    }

  render(){
    return (
      <form className="col s12" onSubmit={this.submitForm.bind(this)}>
        <div className="col s12 m7">
          <h2 className="header"> <strong>ID : {this.props.currentUser._id}</strong> </h2>
          <div className="card horizontal">
            <div className="card-stacked col s12">
              <div className="card-content">
                <p><strong>Email : </strong>{this.props.currentUser.email}</p>
              </div>
              <div className="card-action col s12">
                <a className="col s6" href="#">{this.props.currentUser.name}</a>
                <input type="password" id="password"></input>
                
                <button className="waves-effect waves-light btn-small" type="submit"
              name="action">update Token</button>
              </div>
            </div>
          </div>
        </div>
      </form>
    )
  }
}
 
export default UserCard;
import React from 'react';
import axios from 'axios';

class LoginForm extends React.Component {
    submitForm = (event) => {
        event.preventDefault();

        axios.post('http://localhost:5000/api/justify',
        {
            headers: {
                'Content-Type': "application/json",
                "Authorization": "Basic " + Buffer.from("credentials.clientId" + ':' + "coucou").toString('base64')
            },
            data:{
                text: this.textJustify.value
            }
        })
        .then((response) => {
            console.log(response);
        })
        .catch((err) => {
            console.log(err);
        })
    }
    render() { 
        return ( 
        <form className="col s12" onSubmit={this.submitForm.bind(this)}>
              <div className="row">
                <div className="input-field col s6">
                  <input id="input_number" type="number" data-length="2" placeholder="80"/>
                  <label htmlFor="input_number">Number of spacing : </label>
                </div>
              </div>
              <div className="row">
                <div className="input-field col s12">
                  <textarea id="textJustify" name="textJustify" className="materialize-textarea" data-length="1000" placeholder="Paste your text here" ></textarea>
                  <label htmlFor="textJustify" >Texte à justifier :</label>
                </div>
              </div>
              <button className="btn waves-effect waves-light" type="submit"
              name="action">Submit</button>
        </form>
        );
    }
}
 
export default LoginForm;
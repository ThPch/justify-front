import React from 'react';

const UserCard = (props) => {
    return ( 
        <div className="col s12 m7">
        <h2 className="header"> <strong>ID : </strong> {props.currentUser._id}</h2>
        <div className="card horizontal">
          <div className="card-stacked">
            <div className="card-content">
            <p><strong>Email : </strong>{props.currentUser.email}</p>
            </div>
            <div className="card-action">
              <a href="#">{props.currentUser.name}</a>
            </div>
          </div>
        </div>
      </div>
     );
}
 
export default UserCard;
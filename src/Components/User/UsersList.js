import React from 'react';

const UsersList = (props) => {
    let arr =[{"_id":"5f85805cca36489bf0b6f356","name":"tictac","email":"tictac@trip.com"},{"_id":"5f86b9c0203b39bc6c200cad","name":"tictac","email":"titac@trip.com"},{"_id":"5f86b9c6203b39bc6c200cae","name":"tictac","email":"titaaaaac@trip.com"}];

    return (
    <div>
        <ul className="collection width-header">
            <li className="collection-header"><h4>users</h4></li>
            {props.users.map((user) => {
                return <a href="#!" className="collection-item" key={user._id} 
                onClick={props.updateCurrentUser.bind(this, user)}>{user.name}
                {user.email}</a>
            })}
        </ul>
    </div> 
    );
}
 
export default UsersList;
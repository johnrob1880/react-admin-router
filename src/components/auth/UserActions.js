import React, {Fragment} from 'react';

function UserActions(props) {
  return (<Fragment><button className="btn" onClick={props.onLogout}>
    Log Out
  </button></Fragment>) 
}

export default UserActions;
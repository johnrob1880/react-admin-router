import React, { Fragment } from "react";
import { Switch, Route, Link } from "react-router-dom";

import { useStore } from 'react-hookstore';
import authStore from './../../stores/authStore';
import UserActions from "./../auth/UserActions";
import HomeToolbar from "./HomeToolbar";
import DashboardToolbar from "./DashboardToolbar";

function Toolbar() {
  const [state, dispatch] = useStore(authStore);

  const handleLogout = () => {
    dispatch({type: 'logout', user: state.user});
  }
  return (
    <Fragment>
      <Switch>
        <Route exact path="/" component={HomeToolbar} />
        <Route path="/login" render={() => <div><span role="img" aria-label="Warning">🛑</span> Restricted Area</div>} />
        <Route path="/logout" render={() => <div>&nbsp;</div>} />
        <Route path="/dashboard" component={DashboardToolbar} />
        <Route path="/profile" render={() => <div>&nbsp;</div>} />
      </Switch>
      {!state.user && <Link className="btn" to="/login">Log In</Link>}
      {state.user  && <UserActions onLogout={handleLogout} />}
    </Fragment>
  );
}
export default Toolbar;

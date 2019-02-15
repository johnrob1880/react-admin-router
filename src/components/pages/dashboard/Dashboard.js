import React, { Fragment } from "react";
import DashboardItem from "./DashboardItem";
import { Redirect } from 'react-router-dom';
import authStore from './../../../stores/authStore';
import appStore from './../../../stores/appStore';
import { useStore } from 'react-hookstore';

function Dashboard(props) {
  const [state] = useStore(authStore);
  const [appState] = useStore(appStore);
  const { foobars, doohickeys, fetching } = appState;

  if (!state.user) {
    return (<Redirect to={
      {
        pathname: '/login',
        state: { from: props.location }
      }
    } />)
  }
  return (
    <Fragment>
      <h2>Dashboard</h2>
      <div className="dashboard">
        <DashboardItem>{fetching ? <span role="img" aria-label="Waiting">⏳</span> : foobars} Foobars</DashboardItem>
        <DashboardItem>{doohickeys} Doohickeys</DashboardItem>
        <DashboardItem full><img src="https://imgs.xkcd.com/comics/decline.png" alt="decline" /></DashboardItem>
        <DashboardItem col>A</DashboardItem>
        <DashboardItem col>B</DashboardItem>
        <DashboardItem col>C</DashboardItem>
        <DashboardItem col>D</DashboardItem>        
      </div>
      <p>read more about this in <a href="https://mxb.at/blog/css-grid-admin-dashboard/">this blogpost</a>.</p>
    </Fragment>
  );
}

export default Dashboard;

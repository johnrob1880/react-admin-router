import React, { Fragment } from "react";
import DashboardItem from "./DashboardItem";
import ChartJs from './../../charts/ChartJs';
import { Redirect } from "react-router-dom";
import authStore from "./../../../stores/authStore";
import appStore from "./../../../stores/appStore";
import { useStore } from "react-hookstore";
import useScript from "./../../../hooks/useScript";

function Dashboard(props) {
  const [state] = useStore(authStore);
  const [appState] = useStore(appStore);
  const { foobars, doohickeys, fetching } = appState;

  if (!state.user) {
    return (
      <Redirect
        to={{
          pathname: "/login",
          state: { from: props.location }
        }}
      />
    );
  }
  
  const [loaded, error] = useScript(
    "https://cdnjs.cloudflare.com/ajax/libs/Chart.js/2.7.3/Chart.min.js"
  );

  return (
    <Fragment>
      <h2>Dashboard</h2>
      <div className="dashboard">
        <DashboardItem>
          {fetching ? (
            <span role="img" aria-label="Waiting">⏳</span>
          ) : (
            foobars
          )}{" "}
          Foobars
        </DashboardItem>
        <DashboardItem>{doohickeys} Doohickeys</DashboardItem>
        <DashboardItem full>
          <img src="https://imgs.xkcd.com/comics/decline.png" alt="decline" />
        </DashboardItem>
        <DashboardItem col>A</DashboardItem>
        <DashboardItem col>B</DashboardItem>
        <DashboardItem col>C</DashboardItem>
        <DashboardItem col>D</DashboardItem>
        {loaded && !error && (
          <DashboardItem full>
            <ChartJs options={{
              type: 'line',
              data: {
                labels: ['JAN', 'FEB', 'MAR', 'APR', 'MAY'],
                datasets: [{
                  label: 'Foobars',
                  data: [10, 41, 32, 20, foobars],
                  fill: false,
                  borderColor: appState.themeAccentBackground
              }, {
                label: 'Doohickeys',
                data: [34, 51, 20, 40, parseInt(doohickeys)],
                fill: false,
                borderColor: '#dc5a60'
            }]
              },
              options: {}
            }} />
          </DashboardItem>
          )}
      </div>
      <p>
        read more about this in{" "}
        <a href="https://mxb.at/blog/css-grid-admin-dashboard/">
          this blogpost
        </a>
        .
      </p>
    </Fragment>
  );
}

export default Dashboard;

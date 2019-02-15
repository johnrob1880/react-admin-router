import React, { Fragment } from "react";
import { NavLink } from "react-router-dom";
import useMedia from "./../../hooks/useMedia";

function MainMenu(props) {

  const homeTitle = useMedia(["(min-width: 48rem)"], [<Fragment><span role="img" aria-label="home">🏠</span> Home</Fragment>], <span className="menu__icon" role="img" aria-label="Home">🏠</span>);
  const dashboardTitle = useMedia(["(min-width: 48rem)"], [<Fragment><span role="img" aria-label="dashboard">📊</span> Dashboard</Fragment>], <span className="menu__icon" role="img" aria-label="Dashboard">📊</span>);
  const profileTitle = useMedia(["(min-width: 48rem)"], [<Fragment><span role="img" aria-label="profile">👷</span> Profile</Fragment>], <span className="menu__icon" role="img" aria-label="Profile">👷</span>);
  return (
    <div>
      <ul className="menu">
        {props.user && (
          <li className="menu__item">
            <NavLink
              exact
              to="/profile"
              className="menu__link"
              activeClassName="menu__link--active"
            >
              {profileTitle}
            </NavLink>
          </li>
        )}
        <li className="menu__item">
          <NavLink
            exact
            to="/"
            className="menu__link"
            activeClassName="menu__link--active"
          >
            {homeTitle}
          </NavLink>
        </li>
        <li className="menu__item">
          <NavLink
            to="/dashboard"
            className="menu__link"
            activeClassName="menu__link--active"
          >
            {dashboardTitle}
          </NavLink>
        </li>
      </ul>
    </div>
  );
}

export default MainMenu;

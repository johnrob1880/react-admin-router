import React from "react";
import { Redirect } from "react-router-dom";
import { useStore } from "react-hookstore";
import authStore from "./../../stores/authStore";

function Profile(props) {
  const [state] = useStore(authStore);
  const { user } = state;

  if (!user) {
    return (
      <Redirect
        to={{
          pathname: "/login",
          state: { from: props.location }
        }}
      />
    );
  }

  return (
    <div className="profile-page">
      <h2><span role="img" aria-label="user">👷</span> {user.username}</h2>
    </div>
  );
}

export default Profile;

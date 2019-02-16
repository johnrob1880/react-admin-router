import React from "react";
import { Redirect } from "react-router-dom";
import { useStore } from "react-hookstore";
import authStore from "./../../stores/authStore";
import appStore from "./../../stores/appStore";

function Profile(props) {
  const [state] = useStore(authStore);
  const [appState, dispatch] = useStore(appStore);

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

  const handleInputChange = event => {
    const { name, value } = event.target;
    if (name === "theme") {
      dispatch({ type: "set_theme", theme: value });
    } else if (name === "background") {
      dispatch({ type: "set_theme_accent_background", color: value });
    } else if (name === "color") {
      dispatch({ type: "set_theme_accent_text_color", color: value });
    }
  };

  return (
    <div className="profile-page">
      <h2>
        <span role="img" aria-label="user">
          👷
        </span>{" "}
        {user.username}
      </h2>
      <form className="inline-form">
        <fieldset>
          <legend>Theme</legend>
          <label>
            <input
              type="radio"
              name="theme"
              value="light"
              onClick={handleInputChange}
              defaultChecked={appState.theme === "light"}
            />{" "}
            Light
          </label>
          &nbsp;
          <label>
            <input
              type="radio"
              name="theme"
              value="default"
              onClick={handleInputChange}
              defaultChecked={appState.theme === "default"}
            />{" "}
            Dark
          </label>
        </fieldset>
      </form>
      <form className="inline-form">
        <fieldset>
          <legend>Accent Background Color</legend>
          <input
            type="color"
            name="background"
            value={appState.themeAccentBackground}
            onChange={handleInputChange}
          />
        </fieldset>
      </form>
      <form className="inline-form">
        <fieldset>
          <legend>Accent Text Color</legend>
          <input
            type="color"
            name="color"
            value={appState.themeAccentTextColor}
            onChange={handleInputChange}
          />
        </fieldset>
      </form>
    </div>
  );
}

export default Profile;

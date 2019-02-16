import { createStore } from "react-hookstore";

const getLocalStorage = (key, defaultValue) => {
  try {
    const item = window.localStorage.getItem(key);
    return item ? JSON.parse(item) : defaultValue;
  } catch (error) {
    // If error also return defaultValue
    console.log(error);
    return defaultValue;
  }
};

const setLocalStorage = (key, value) => {
  try {
    const valueToStore =
      value instanceof Function ? value(getLocalStorage(key)) : value;
    window.localStorage.setItem(key, JSON.stringify(valueToStore));
  } catch (error) {
    console.log(error);
  }
};

const appStore = createStore(
  "app",
  {
    theme: getLocalStorage("theme", "default"),
    themeAccentTextColor: getLocalStorage("theme_accent_text_color", "#ffffff"),
    themeAccentBackground: getLocalStorage(
      "theme_accent_background",
      "#dc5a60"
    ),
    accepts_cookies: getLocalStorage("accepts_cookies", false),
    foobars: 41,
    doohickeys: 81.712,
    flash: null,
    snack: null
  },
  (state, action) => {
    switch (action.type) {
      case "add_foobar":
        // Simulate async api call
        setTimeout(() => {
          appStore.dispatch({
            type: "add_foobar_success",
            value: action.value
          });
          action.onSuccess && action.onSuccess();
        }, 1000);
        return { ...state, error: null, fetching: true };
      case "add_foobar_success":
        setTimeout(() => {
          appStore.dispatch({
            type: "set_snack",
            snack: { message: `Added ${action.value} Foobar` },
            duration: 3000
          });
        }, 0);
        return {
          ...state,
          error: null,
          foobars: state.foobars + action.value,
          fetching: false
        };
      case "set_theme":
        setLocalStorage("theme", action.theme);
        return { ...state, theme: action.theme };
      case "set_theme_accent_background":
        setLocalStorage("theme_accent_background", action.color);
        return { ...state, themeAccentBackground: action.color };
      case "set_theme_accent_text_color":
        setLocalStorage("theme_accent_text_color", action.color);
        return { ...state, themeAccentTextColor: action.color };
      case "set_flash":
        if (action.flash && action.flash.duration) {
          setTimeout(() => {
            appStore.dispatch({ type: "clear_flash" });
          }, parseInt(action.flash.duration));
        }
        return { ...state, flash: action.flash };
      case "clear_flash":
        if (state.flash && typeof state.flash.onClose === "function") {
          state.flash.onClose(action);
        }
        return { ...state, flash: null };
      case "set_snack":
        if (action.snack) {
          setTimeout(() => {
            appStore.dispatch({ type: "clear_snack" });
          }, parseInt(action.snack.duration || 3000));
        }
        return { ...state, snack: action.snack };
      case "clear_snack":
        if (state.snack && typeof state.snack.onClose === "function") {
          state.snack.onClose(action);
        }
        return { ...state, snack: null };
      case "accept_cookies":
        setLocalStorage("accepts_cookies", true);
        return { ...state, accepts_cookies: true };
      default:
        return state;
    }
  }
);

export default appStore;

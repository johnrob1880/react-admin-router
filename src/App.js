import React, { useEffect } from "react";
import { BrowserRouter, Switch, Route, Redirect } from "react-router-dom";
import AdminLayout from "./components/layout/AdminLayout";
import Home from "./components/pages/Home";
import Login from "./components/pages/Login";
import Dashboard from "./components/pages/dashboard/Dashboard";
import Profile from "./components/pages/Profile";
import NotFound from "./components/pages/NotFound";
import "./assets/sass/admin/admin.scss";

import { useStore } from "react-hookstore";
import appStore from "./stores/appStore";

function App() {
  const [state, dispatch] = useStore(appStore);

  const { accepts_cookies } = state;

  if (!accepts_cookies) {
    useEffect(() => {
      dispatch({
        type: "set_flash",
        flash: {
          message:
            "🍪 This website uses cookies to give you the best, most relevant experience.",
          className: "alert-info",
          onClose: () => {
            dispatch({ type: "accept_cookies" });
          }
        }
      });
      return () => {};
    }, []);
  }

  return (
    <BrowserRouter>
      <AdminLayout baseUrl="/" title="Grid Admin">
        <Switch>
          <Route exact path="/" component={Home} />
          <Route path="/profile" component={Profile} />
          <Route path="/dashboard" component={Dashboard} />
          <Route exact path="/404" component={NotFound} />
          <Route path="/login" component={Login} />
          <Redirect to="/404" />
        </Switch>
      </AdminLayout>
    </BrowserRouter>
  );
}

export default App;

import React from 'react';
//import { useStore } from 'react-hookstore';
import { BrowserRouter, Switch, Route, Redirect } from 'react-router-dom';
import AdminLayout from './components/layout/AdminLayout';
import MainMenu from './components/menus/MainMenu';
import Toolbar from './components/toolbar/Toolbar';
import Footer from './components/footer/Footer';
import Home from './components/pages/Home';
import Login from './components/pages/Login';
import Dashboard from './components/pages/dashboard/Dashboard';
import Profile from './components/pages/Profile';
import NotFound from './components/pages/NotFound';
import { useTheme, defaultTheme } from './hooks/useTheme';
//import authStore from './stores/authStore';

//import './components/layout/admin-layout.scss';
import './assets/sass/admin/admin.scss';

// const PrivateRoute = ({component: Component, ...rest}) => {
//   const [state] = useStore(authStore);
//   return (
//     <Route {...rest}
//       render={props => state.user !== null ? (
//         <Component {...props} />
//       ): (
//       <Login />)} />
//   )
  
// } 
function App() {
  useTheme({
    ...defaultTheme, 
    'admin-logo-background': 'green'
  });
  return (
    <BrowserRouter>
      <AdminLayout 
          baseUrl="/" 
          title="Grid Admin" 
          renderToolbar={Toolbar} 
          renderMenu={MainMenu}
          renderFooter={Footer}>
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

  )
}

export default App;

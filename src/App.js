import './App.css';
import React, {useState} from 'react';   
import { authenticate } from './api/Login/authenticate';
import { Redirect, Route, BrowserRouter as Router, Switch } from 'react-router-dom';
import Loginform from './components/Login/login';
import HomePage from './pages/Homepage';
import routeConfig from './config/route.js';
import AdminDashboard from './pages/DashBoard/index'

function App() {
  const ProtectRoute = ({ component: Component, ...rest }) => (
    <Route {...rest} render={(props) => (
      // authenticate() ? <Component {...props} /> : <Redirect to='/' />
      <Component {...props} />
    )}
    />
  )

  return (
    <Switch>
      <Route path="/" exact component={Loginform}></Route>
      <ProtectRoute path={routeConfig.dashboard["list-url"]} component={HomePage} />
      <Route path={routeConfig.admin["list-url"]} component={Tabview} />
    
    </Switch>
    /*<AdminDashboard/>*/
  );
}

export default App;
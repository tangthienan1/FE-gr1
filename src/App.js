import './App.css';
import React, {useState} from 'react';   
import { authenticate } from './api/Login/authenticate';
import { Redirect, Route, Switch } from 'react-router-dom';
import Loginform from './components/Login/login';
import HomePage from './pages/Homepage';
import routeConfig from './config/route.js';
import StudentDashboard from './pages/DashBoard/Student';
import CoordinatorDashboard from './pages/DashBoard/Coordinator';
import AdminDashboard from './pages/DashBoard/Admin/AdminDashboard';
import ManagerDashboard from './pages/DashBoard/Manager/Overview/ManagerDashboard';

function App() {

  const ProtectRoute = ({ component: Component, ...rest }) => (
    <Route {...rest} render={(props) => (
      authenticate() ? <Component {...props} /> : <Redirect to='/' />
    )}
    />
  )

  return (
    <Switch>
      <Route path="/" exact component={Loginform}></Route>
      <ProtectRoute path={routeConfig.homepage["list-url"]} component={HomePage} />
      <Route path={routeConfig.student['list-url']} component={StudentDashboard}></Route>
      <Route path={routeConfig.coordinator['list-url']} component={CoordinatorDashboard}></Route>
      <Route path={routeConfig.admin['list-url']} component={AdminDashboard}></Route>
      <Route path={routeConfig.manager['list-url']} component={ManagerDashboard}></Route>
    </Switch>
  );
  }

export default App;
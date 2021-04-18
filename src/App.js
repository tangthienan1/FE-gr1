import './App.css';
import React, {useState} from 'react';   
import { authenticate } from './api/Login/authenticate';
import { Redirect, Route, Switch } from 'react-router-dom';
import Loginform from './components/Login/login';
import HomePage from './pages/Homepage';
import routeConfig from './config/route.js';
import StudentDashboard from './pages/DashBoard/Student';
import CoordinatorDashboard from './pages/DashBoard/Coordinator';


function App() {

  return (
    <Switch>
      <Route path="/" exact component={Loginform}></Route>
      <ProtectRoute path={routeConfig.homepage["list-url"]} component={HomePage} />
      {/* <ProtectRoute path={routeConfig.dashboard["list-url"]} component={HomePage} /> */}
      <Route path={routeConfig.student['list-url']} component={StudentDashboard}></Route>
      <Route path={routeConfig.coordinator['list-url']} component={CoordinatorDashboard}></Route>

      
    </Switch>
  );
  }

export default App;
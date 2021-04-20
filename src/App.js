import React from 'react';
import { Redirect, Route, Switch } from 'react-router-dom';
import { authenticate } from './api/Login/authenticate';
import './App.css';
import routeConfig from './config/route.js';
import AdminDashboard from './pages/DashBoard/Admin/AdminDashboard';
import CoordinatorDashboard from './pages/DashBoard/Coordinator';
import ManagerDashboard from './pages/DashBoard/Manager/Overview/ManagerDashboard';
import StudentDashboard from './pages/DashBoard/Student';
import HomePage from './pages/Homepage';
import LoginPage from './pages/Login';

function App() {
  const ProtectRoute = ({ component: Component, ...rest }) => (
    <Route {...rest} render={(props) => (
      authenticate() ? <Component {...props} /> : <Redirect to='/' />
    )}
    />
  )

  return (
    <div className="App">
      <Switch>
        <Route path="/" exact component={LoginPage} />
        <Route path={routeConfig.homepage["list-url"]} component={HomePage} />
        <Route path={routeConfig.student['list-url']} component={StudentDashboard} />
        <Route path={routeConfig.coordinator['list-url']} component={CoordinatorDashboard} />
        <Route path={routeConfig.admin['list-url']} component={AdminDashboard} />
        <Route path={routeConfig.manager['list-url']} component={ManagerDashboard} />
      </Switch>
    </div>

  );
}

export default App;
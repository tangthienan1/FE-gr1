import React from 'react';
import { Redirect, Route, Switch } from 'react-router-dom';
import { authenticate } from './api/Login/authenticate';
import './App.css';
import routeConfig from './config/route.js';
import ProfilePage from './pages/Profile';
import AdminDashboard from './pages/DashBoard/Admin/AdminDashboard';
import CoordinatorDashboard from './pages/DashBoard/Coordinator/index';
import ManagerDashboard from './pages/DashBoard/Manager/Overview/ManagerDashboard';
import StudentDashboard from './pages/DashBoard/Student';
import HomePage from './pages/Homepage';
import LoginPage from './pages/Login';
import CreateAccountForm from './pages/DashBoard/Admin/Modal/CreateAccountForm';


function App() {
  const ProtectRoute = ({ component: Component, ...rest }) => (
    <ProtectRoute {...rest} render={(props) => (
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
        <Route path={routeConfig.marketing['list-url']} component={ManagerDashboard} />
        <Route path={routeConfig.profile['list-url']} component={ProfilePage} />
        <Route path={routeConfig.signup['list-url']} component={CreateAccountForm} />
      </Switch>
    </div>
  );
}

export default App;
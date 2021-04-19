import './App.css';

import { authenticate } from './api/Login/authenticate';
import { Redirect, Route, Switch } from 'react-router-dom';
import Loginform from './components/Login/login';
import HomePage from './pages/Homepage';
import routeConfig from './config/route.js';
import StudentDashboard from './pages/DashBoard/Student';
import CoordinatorDashboard from './pages/DashBoard/Coordinator';
import MarketingDashboard from './pages/DashBoard/Marketing/MarketingDashboard';



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
      <Route path={routeConfig.guest["list-url"]} component={HomePage} />
      {/* <ProtectRoute path={routeConfig.dashboard["list-url"]} component={HomePage} /> */}
      <Route path={routeConfig.student['list-url']} component={StudentDashboard}></Route>
      <Route path={routeConfig.coordinator['list-url']} component={CoordinatorDashboard}></Route>
      <Route path={routeConfig.marketing['list-url']} component={MarketingDashboard}></Route>
      
    </Switch>
  );
}

export default App;

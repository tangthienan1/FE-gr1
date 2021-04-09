import './App.css';

import { authenticate } from './api/Login/authenticate';
import { Redirect, Route, BrowserRouter as Router, Switch } from 'react-router-dom';
import Loginform from './components/Login/login';
import HomePage from './pages/Homepage';
import routeConfig from './config/route.js';
import StudentDashboard from './pages/DashBoard/Student';


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
      {/* <ProtectRoute path={routeConfig.dashboard["list-url"]} component={HomePage} /> */}
      <Route path={routeConfig.student['list-url']} component={StudentDashboard}></Route>
      
    </Switch>
  );
}

export default App;

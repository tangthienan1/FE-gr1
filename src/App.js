import './App.css';

import { authenticate } from './api/Login/authenticate';
import { Redirect, Route, BrowserRouter as Router, Switch } from 'react-router-dom';
import Loginform from './components/Login/login';
import HomePage from './pages/Homepage';
import routeConfig from './config/route.js';


function App() {
  const ProtectRoute = ({ component: Component, ...rest }) => (
    <Route {...rest} render={(props) => (
      authenticate() ? <Component {...props} /> : <Redirect to='/' />
    )}
    />
  )

  return (
    <Switch>
      <Route path="/" exact component={HomePage}></Route>
      {/* <ProtectRoute path={routeConfig.dashboard["list-url"]} component={HomePage} /> */}
    </Switch>
  );
}

export default App;

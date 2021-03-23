import './App.css';
import './components/Login/index.css';
import { authenticate } from './api/Login/authenticate';
import { Redirect, Route, Router, Switch } from 'react-router';
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
    <Router>
      <Switch>
        <Route path="/" exact component={Loginform}></Route>
        <ProtectRoute path={routeConfig.dashboard["list-url"]} component={HomePage} />
      </Switch>
    </Router>
  );
}

export default App;

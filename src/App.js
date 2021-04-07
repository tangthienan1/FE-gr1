import { BrowserRouter as Router, Redirect, Route, Switch } from 'react-router-dom';
import { authenticate } from './api/Login/authenticate';
import './App.css';
import './components/Login/index.css';
import Loginform from './components/Login/login';
import Homepage from './pages/Homepage/index';
import studentDashBoard from './pages/DashBoard/Student/studentDashBoard';



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
        <Route path="/" exact component={Homepage}></Route>
        <Route path="/dashboard" exact component={studentDashBoard}></Route>
        {/* <ProtectRoute path={routeConfig.dashboard["list-url"]} component={HomePage} /> */}
      </Switch>
    </Router>
  );
}

export default App;

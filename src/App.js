import './App.css';
import React, {useState} from 'react';   
import { authenticate } from './api/Login/authenticate';
import { Redirect, Route, BrowserRouter as Router, Switch } from 'react-router-dom';
import Loginform from './components/Login/login';
import HomePage from './pages/Homepage';
import routeConfig from './config/route.js';
import Tabs from './pages/DashBoard/Admin/tabview'
import { modal } from './pages/DashBoard/Admin/modal'


function App() {
  /*const closeModalHandler = () => setShow(false);
  const [show, setShow] = useState(false);*/
  return(
    <div>
    <Tabs></Tabs>
    </div>
  );
  }
export default App;
/*<button onClick={()=> setShow(true)}classname="btn-openModal">Create</button>
    <modal show={show} close={closeModalHandler}/>*/
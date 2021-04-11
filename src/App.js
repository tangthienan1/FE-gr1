import './App.css';
import React, {useState} from 'react';   
import { authenticate } from './api/Login/authenticate';
import { Redirect, Route, BrowserRouter as Router, Switch } from 'react-router-dom';
import Loginform from './components/Login/login';
import HomePage from './pages/Homepage';
import routeConfig from './config/route.js';
import AdminDashboard from './pages/DashBoard/index'
import Pagination from './components/Base/include/Pagination/Pagination'


function App() {

  return (
      <AdminDashboard/>
  );
  }

export default App;
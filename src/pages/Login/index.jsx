import { Redirect } from "react-router-dom";
import React from 'react';
import { authenticate } from '../../api/Login/authenticate';
import { routeConfig } from '../../config/route';
import HomePage from '../Homepage';
import Loginform from '../../components/Login/login';

const LoginPage = () => {
    authenticate() && <Redirect to={routeConfig.dashboard['list-url']} component={HomePage}/>
    return (
        <Loginform/>
    );
};

export default LoginPage;
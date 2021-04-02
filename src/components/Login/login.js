import React, { useState } from 'react'
import { useHistory } from "react-router-dom"
import { useForm } from 'react-hook-form';
import loginApi from '../../api/Login/loginApi';
import './css/main.css';
import './css/util.css';

function Loginform(props) {
    const { register, handleSubmit, errors } = useForm()
    const history = useHistory();
    const registerCheck = (required, minLength) => {
        return (register({
            required,
            minLength
        }))
    }
    const redirectToDashBoard = () => {
        let path = `dashboard`;
        history.push(path);
    }

    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');

    const onSubmit = async (data, e) => {
        e.prevenDefault();
        setEmail(data.email);
        setPassword(data.password);
        const loginData = {
            email,
            password
        }
        const response = await loginApi.login(loginData);
        if (response.data != null) {
            //set token vao localstorage xong r moi redirect sang trang dashboard
            localStorage.setItem("token", response.data.result.token);
            redirectToDashBoard();
        }
    }
    return (
        <div class="limiter">
            <div class="container-login100">
                <div class="wrap-login100">
                    <div class="login100-pic">
                        <img src="https://www.unisongroup.net/login/images/img-01.png" alt="IMG" />
                    </div>
                    <form class="login100-form" onSubmit={handleSubmit(onSubmit)}>
                        <span class="login100-form-title">
                            Member Login
        			    </span>

                        <div class="wrap-input100">
                            <input class="input100" type="email" name="email" placeholder="Email" ref={registerCheck("Email is Invalid")} />                            
                            <span class="focus-input100"></span>
                            <span class="symbol-input100">
                                <i class="fa fa-envelope" aria-hidden="true"></i>
                            </span>
                        </div>
                        {errors.email && <p className="text-danger pb-2">Email is invalid</p>}
                        <div class="wrap-input100 validate-input" data-validate="Password is required">
                            <input class="input100" type="password" name="password" placeholder="Password" ref={registerCheck("Password is invalid", {value: 8, message: "Too short, at least 8 character"})} />

                            <span class="focus-input100"></span>
                            <span class="symbol-input100">
                                <i class="fa fa-lock" aria-hidden="true"></i>
                            </span>
                        </div>
                        {errors.password && <p className="text-danger pb-2">{errors.password.message}</p>}
                        <div class="container-login100-form-btn">
                            <button type="submit" class="login100-form-btn">
                                Login
        				    </button>
                        </div>

                        <div class="text-center p-t-12">
                            <span class="txt1">
                                Forgot
        				    </span>
                            <a class="txt2" href="#">
                                Email / Password?
        				    </a>
                        </div>

                        <div class="text-center p-t-136">
                            <a class="txt2" href="#">
                                Create your Account
        					<i class="fa fa-long-arrow-right m-l-5" aria-hidden="true"></i>
                            </a>
                        </div>
                    </form>
                </div>
            </div>
        </div>
    )
}

export default Loginform


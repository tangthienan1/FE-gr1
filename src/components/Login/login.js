import React, { useState } from 'react'
import { useHistory } from "react-router-dom"
import { useForm } from 'react-hook-form';
import './index.css';
import loginApi from '../../api/Login/loginApi';


function Loginform(props) {
    const { register, handleSubmit, errors } = useForm()
    const history = useHistory();
    const registerCheck = (required, minLength) =>{
        return (register({
            required,
            minLength
        }))
    }
    const redirectToDashBoard = () =>{
        let path = `dashboard`;
        history.push(path);
    }

    const [username, setUsername] = useState('');
    const [password, setPassword] = useState('');

    const onSubmit = async (data,e)=>{
        e.prevenDefault();
        setUsername(data.username);
        setPassword(data.password);
        const loginData={
            username,
            password
        }
        const response = await loginApi.login(loginData);
        if(response.data != null){
            //set token vao localstorage xong r moi redirect sang trang dashboard
            localStorage.setItem("token", response.data.result.token);
            redirectToDashBoard();
        }
    }
    return (
        <form onSubmit={handleSubmit(onSubmit)}>
            <div className="form-inner">
                <h2>Log in</h2>
                {(errors !== "") ? (<div className="error">chỗ này từng là bỏ errors vào nhưng đéo dc, Anh ân coi nha</div>) : ""}
                
                <div className="form-group">
                    <label htmlFor="email">Email:</label>
                    <input type="email" name="email" id="email" ref={registerCheck(true, 1)} />
                </div>
                <div className="form-group">
                    <label htmlFor="password">Password:</label>
                    <input type="password" name="password" id="password" ref={registerCheck(true,1)} />
                </div>
                <input type="submit" value="LOGIN" />
            </div>
        </form>
    )
}

export default Loginform;
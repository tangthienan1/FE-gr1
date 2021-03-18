import React, { useState } from 'react';
import Loginform from './login.js';
import './index.css';

function Signin() {
  const adminUser = {
    email: "admin@admin.com",
    password: "admin123"
  }

  const [user, setUser] = useState({ name: "", email: "" });
  const [error, setError] = useState("");

  const Login = details => {
    console.log(details);

    if (details.email === adminUser.email && details.password === adminUser.password) {
      console.log("Log in");
      setUser({
        name: details.name,
        email: details.email
      });
    } else {
      console.log("Please try again!");
      setError("Please try again!");
    }
  }

  const Logout = () => {
    console.log("Logout");
    setUser({ name: "", email: "" });
  }

  return (
    <div className="Signin">
      {(user.email !== "") ? (
        <div className="welcome">
          <h2>Welcome, <span>{user.name}</span></h2>
          <button onClick={Logout}>Log out</button>
        </div>
      ) : (
        <Loginform Login={Login} error={error} />
      )}


    </div>
  );
}
export default Signin
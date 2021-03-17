import React, { useState } from 'react'
import './index.css';


function Loginform({ Login, error }) {
    const [details, setDetails] = useState({ name: "", email: "", password: "" });

    const submitHandler = e => {
        e.preventDefault();

        Login(details);
    }

    return (
        <form onSubmit={submitHandler}>
            <div className="form-inner">
                <h2>Log in</h2>
                {(error !== "") ? (<div className="error">{error}</div>) : ""}
                <div className="form-group">
                    <label htmlFor="name">Name:</label>
                    <input type="text" name="name" id="name" onChange={e => setDetails({ ...details, name: e.target.value })} value={details.name} />
                </div>
                <div className="form-group">
                    <label htmlFor="email">Email:</label>
                    <input type="email" name="email" id="email" onChange={e => setDetails({ ...details, email: e.target.value })} value={details.email} />
                </div>
                <div className="form-group">
                    <label htmlFor="password">Password:</label>
                    <input type="password" name="password" id="password" onChange={e => setDetails({ ...details, password: e.target.value })} value={details.password} />
                </div>
                <input type="submit" value="LOGIN" />
            </div>
        </form>
    )
}

export default Loginform

/* useEffect(() => {
   if (localStorage.getItem('user-info')) {
       history.push("/")
   }
}, [])

async function Login() {
   console.warn(email, password)
   let item = { email, password };
   let result = await fetch("http://localhost:3000/api/", {
       method: 'POST',
       headers: {
           "Content-Type": "application/json",
           "Accept": "application/json"

       },
       body: JSON.stringify(item)
   });
   result = await result.json;
   localStorage.setItem('user-info', JSON.stringify(result))
   history.push("/")
}

/*componentDidMount();{
this.refreshList
}
refreshList = ()=>{
axios.get("http://localhost:3000/api/todos/").then((res) => this.setState({ todoList: res.data})).catch((err)=>console.log(err));
}*/

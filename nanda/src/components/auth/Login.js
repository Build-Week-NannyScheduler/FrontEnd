import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import axiosWithAuth from '../../utils/axiosWithAuth';

const Login = props => {
    const [user, setUser] = useState({
        username: "",
        password: ""
    });

    const handleChange = e => {
        setUser({...user, [e.target.name]: e.target.value })
    };

    const handleSubmit = e => {
        e.preventDefault();
        axiosWithAuth()
            .post(
                "/auth/login",
                user
            )
            .then(response => {
                console.log("user", response);
                localStorage.setItem("token", response.data.token);
                props.history.push("/protected");
            })
            .catch(error => {
                // console.log("error", error.response);
                setUser({
                username: "",
                password: ""
                });
            });

    
    };

    return (
        <div className="card">
            <h2>Login</h2>
            <form onSubmit={handleSubmit}>
                <input
                    type="text"
                    name="username"
                    onChange={handleChange}
                    value={user.username}
                />
                <input
                    type="password"
                    name="password"
                    onChange={handleChange}
                    value={user.password}
                />
                <button type="submit">Login</button>
            </form>

            <Link to="/signup" >Don't have an account yet?</Link> 
        </div>
    );
};

export default Login;
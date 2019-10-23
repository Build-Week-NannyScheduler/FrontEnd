import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import axiosWithAuth from '../../utils/axiosWithAuth';

import NannyDashboard from '../NannyDashboard';

const Login = props => {
    const [form, setForm] = useState({
        username: "",
        password: ""
    });

    const handleChange = e => {
        setForm({...form, [e.target.name]: e.target.value })
    };

    const Login = e => {
        e.preventDefault();
        axiosWithAuth()
            .post("/auth/login", form)
            .then(res => {
                console.log(res);
                localStorage.setItem("token", res.data.payload);
                props.history.push("/choice");
            })
            .catch(err => {
                console.log(err.response);
                setForm({
                    username: "",
                    password: ""
                });
            });
    };

    return (
        <div>
            <h2>Login</h2>
            <form onSubmit={Login}>
                <input
                    type="text"
                    name="username"
                    onChange={handleChange}
                    value={form.username}
                />
                <input
                    type="password"
                    name="password"
                    onChange={handleChange}
                    value={form.password}
                />
                <button type="submit">Login</button>
            </form>

            <Link to="/signup" >Don't have an account yet?</Link> 
        </div>
    );
};

export default Login;
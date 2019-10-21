import React, { useState } from 'react';
import axiosWithAuth from '../utils/axiosWithAuth';

const Login = props => {
    const [form, setForm] = useState({
        email: "",
        password: ""
    });

    const handleChange = e => {
        setForm({...form, [e.target.name]: e.target.value })
    };

    const login = e => {
        e.preventDefault();
        axiosWithAuth()
            .post("/api/login", form)
            .then(res => {
                console.log(res);
                localStorage.setItem("token", res.data.payload);
                props.history.push("/");
            })
            .catch(err => {
                console.log(err.response);
                setForm({
                    email: "",
                    password: ""
                });
            });
    };

    return (
        <div>
            <h2>Happy you are here!</h2>
            <form onSubmit={login}>
                <input
                    type="text"
                    name="email"
                    onChange={handleChange}
                    value={form.email}
                />
                <input
                    type="password"
                    name="password"
                    onChange={handleChange}
                    value={form.email}
                />
                <button type="submit">Login</button>
            </form>
        </div>
    );
};

export default Login;
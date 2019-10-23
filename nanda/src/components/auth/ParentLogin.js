import React, { useState } from 'react';
import axiosWithAuth from '../../utils/axiosWithAuth';
import ParentDashboard from '../ParentDashboard';

const ParentLogin = props => {
    const [form, setForm] = useState({
        email: "",
        password: ""
    });

    const handleChange = e => {
        setForm({...form, [e.target.name]: e.target.value })
    };

    const parentLogin = e => {
        e.preventDefault();
        axiosWithAuth()
            .post("/auth/login", form)
            .then(res => {
                console.log(res);
                localStorage.setItem("token", res.data.payload);
                props.history.push("/");
            })
            .catch(err => {
                console.log(err.response);
                setForm({
                    name: "",
                    password: ""
                });
            });
    };

    return (
        <div>
            <h2>Hello Parent!</h2>
            <form onSubmit={ParentDashboard}>
                <input
                    type="text"
                    name="name"
                    onChange={handleChange}
                    //value={form.name}
                />
                <input
                    type="password"
                    name="password"
                    onChange={handleChange}
                    //value={form.email}
                />
                <button type="submit">Login</button>
            </form>
        </div>
    );
};

export default ParentLogin;
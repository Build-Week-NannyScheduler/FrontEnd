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
        <div className='card'>
            <h2>Hello Parent!</h2>
            <form onSubmit={ParentDashboard}>
                <input className="login"
                    type="text"
                    name="name"
                    onChange={handleChange}
                    placeholder="UserName"
                    //value={form.name}
                />
                <input className="login"
                    type="password"
                    name="password"
                    onChange={handleChange}
                    placeholder="Password"
                    //value={form.email}
                />
                <button type="submit">Login</button>
            </form>
        </div>
    );
};

export default ParentLogin;
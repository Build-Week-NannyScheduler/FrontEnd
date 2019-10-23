import React, { useState } from 'react';
import axiosWithAuth from '../../utils/axiosWithAuth';

import NannyDashboard from '../NannyDashboard';

const NannyLogin = props => {
    const [form, setForm] = useState({
        email: "",
        password: ""
    });

    const handleChange = e => {
        setForm({...form, [e.target.name]: e.target.value })
    };

    const nannyLogin = e => {
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
            <h2>Hello Nanny!</h2>
            <form onSubmit={NannyDashboard}>
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

export default NannyLogin;
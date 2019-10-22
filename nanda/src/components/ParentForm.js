import React from "react";
import {Route} from "react-router-dom";
import { withFormik, Field } from "formik";
import styled from "styled-components";
import "../App.css";

const Form = styled.form`
    display: flex;
    flex-flow: column wrap; 
`;

const Label = styled.label`
margin: 10px;
`;
const ParentForm = () =>{
    return (
        <div className="parent-signup">
            <h1>Welcome to Nanda!</h1>
            <h1 className="page-title">Create your Parent Account</h1>
            <Form>
                <div className='card'>
                    <Label className="firstname">
                        <label htmlFor="firstname">First Name</label>
                        <Field type='text' name="firstname" placeholder="First Name"/></Label>
                    <Label className="lastname">
                        <label htmlFor="lastname">Last Name</label>
                        <Field type='text' name="lastname" placeholder="Last Name"/>
                    </Label>
                    <Label className="email">
                        <label htmlFor="email">Email Address</label>
                        <Field type="text" name="email" placeholder="Email"/>
                    </Label>
                    <Label className="UserId">
                        <label htmlFor="userId">User Id</label>
                        <Field type="text" name="userId" placeholder="User ID"/>
                    </Label>
                        <Label className="password">
                        <label htmlFor="password">Password</label>
                    <Field type="password" name="password" placeholder="Enter Password"/>
                    </Label>
                    <Label className="reenterpassword">
                        <label htmlFor="reenterpassword">ReEnter Password</label>
                    <Field type="password" name="reenterpassword" placeholder="ReEnter Password"/>
                    </Label>
                    <p>Sign Up</p>
                    <p className='login'>Already have an account?<br/> Login</p>
                </div>
            </Form>
        </div>
    )
};
const FormikParentForm = withFormik({
    mapPropsToValues({firstname, lastname, email, userId, password, reenterpassword}) {
        return {
            firstname : firstname || '',
            lastname: lastname || '',
            email: email || '',
            userId: userId || '',
            password: password || '',
            reenterpassword: reenterpassword || ''

        }
    }
})(ParentForm);

export default FormikParentForm;
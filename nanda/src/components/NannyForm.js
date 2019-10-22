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
const NannyForm = () =>{
    return (
        <div className="nanny-signup">
            <h1>Welcome to Nanda!</h1>
            <h1 className="page-title"></h1>
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
                        <label htmlFor="userId">Zip Code</label>
                        <Field type="text" name="userId" placeholder="User ID"/>
                    </Label>
                        <Label className="time-available">
                            <h3>Times you are available</h3>
                            <label htmlFor="timeavailable">Monday<br/>
                            <label>From </label><Field type="time" name="timeavailablefrom"/><label> to</label><Field type="time" name="timeavailableto"/></label><br/>
                            <label htmlFor="timeavailable">Tuesday<br/>
                            <label>From </label><Field type="time" name="timeavailablefrom"/><label> to</label><Field type="time" name="timeavailableto"/></label><br/>
                            <label htmlFor="timeavailable">Wednesday<br/>
                            <label>From </label><Field type="time" name="timeavailablefrom"/><label> to</label><Field type="time" name="timeavailableto"/></label><br/>
                            <label htmlFor="timeavailable">Thursday<br/>
                            <label>From </label><Field type="time" name="timeavailablefrom"/><label> to</label><Field type="time" name="timeavailableto"/></label><br/>
                            <label htmlFor="timeavailable">Friday<br/>
                            <label>From </label><Field type="time" name="timeavailablefrom"/><label> to</label><Field type="time" name="timeavailableto"/></label><br/>
                            <label htmlFor="timeavailable">Saturday<br/>
                            <label>From </label><Field type="time" name="timeavailablefrom"/><label> to</label><Field type="time" name="timeavailableto"/></label><br/>
                            <label htmlFor="timeavailable">Sunday<br/>
                            <label>From </label><Field type="time" name="timeavailablefrom"/><label> to</label><Field type="time" name="timeavailableto"/></label><br/>
                    </Label>
                    
                    <p>Sign Up</p>
                    <p className='login'>Already have an account?<br/> Login</p>
                </div>
            </Form>
        </div>
    )
};
const FormikNannyForm = withFormik({
    mapPropsToValues({firstname, lastname, email}) {
        return {
            firstname : firstname || '',
            lastname: lastname || '',
            email: email || '',
        }
    }
})(NannyForm);

export default FormikNannyForm;

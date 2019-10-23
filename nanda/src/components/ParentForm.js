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
            <h1 className="page-title">Create your Parent Profile</h1>
            <Form>
                <div className='card'>
                    <Label className="name">
                        <label htmlFor="name">Name</label>
                        <Field type='text' name="name" placeholder="Full Name"/></Label>
                    <Label className="email">
                        <label htmlFor="email">Email Address</label>
                        <Field type="text" name="email" placeholder="Email"/>
                    </Label>
                    <Label className="zipcode">
                        <label htmlFor="zipcode">Zip Code</label>
                        <Field type="text" name="zipcode" placeholder="Zip Code"/>
                    </Label>
                    <Label className="numKids">
                        <Field component="select" name="numKids">
                            <option>Choose an option</option>
                            <option value="1">1</option>
                            <option value="2">2</option>
                            <option value="3">3</option>
                            <option value="4">4</option>
                            <option value="5">5</option>
                            <option value="6">6</option>
                            <option value="7">7</option>
                            <option value="8">8</option>
                            <option value="9">9</option>
                            <option value="10+">10+</option>
                        </Field>
                    </Label>
                    <Label className="TOS">
                        <label htmlFor="TOS">Click here to accept the Terms of Service</label>
                        <Field type="checkbox" name='TOS'></Field>
                    </Label>
                    <p className='button'>Save</p>
                    <p className='button'>Cancel</p>
                </div>
            </Form>
        </div>
    )
};
const FormikParentForm = withFormik({
    mapPropsToValue({name, email, zipcode, numKids}) {
        return {
            name: name || '',
            email: email || '',
            zipcode: zipcode || '',
            numKids: numKids || '',
        }
    }
})(ParentForm);

export default FormikParentForm;
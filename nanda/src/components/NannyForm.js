import React from "react";
import { Link } from "react-router-dom";
import {  withFormik, Field } from "formik";
import styled from "styled-components";
import "../App.css";
import { connect } from 'react-redux';


const Form = styled.form`
    display: flex;
    flex-flow: column wrap;    
    
`;

const Label = styled.label`
margin: 10px;
`;
export const NannyForm = () => {
    return (
        <div className="nanny-signup">
            <h1>Welcome to Nanda!</h1>
            <h1 className="page-title">Create your Nanny Profile</h1>
            <Form>
                <div className='card'>
                    <Label className="name">
                        <label htmlFor="name">Full Name</label>
                        <Field type='text' name="name" placeholder="Full Name"/></Label>
                    <Label className="email">
                        <label htmlFor="email">Email Address</label>
                        <Field type="text" name="email" placeholder="Email"/>
                    </Label>
                    <Label className="zipcode">
                        <label htmlFor="zipcode">Zip Code</label>
                        <Field type="text" name="zipcode" placeholder="Zip Code"/>
                    </Label>
                    <Label className="time-available">
                        <h3>What is your general availability?</h3>
                        <Field component="select" className="availability" name="availability">
                            <option>Choose an option</option>
                            <option value="Morning">Morning</option>
                            <option value="Afternoon">Afternoon</option>
                            <option value="Evening">Evening</option>
                            <option value="Overnight">Overnight</option>
                        </Field>
                    </Label>
                    <Label className="driveKids">Are you able to transport childrent to a different location if needed? 
                    <br />
                     {/* <label htmlFor="transport">Yes</label>   <Field type="checkbox" name="transportYes" value="canDrive"></Field> */}
                     <label htmlFor="transport">No</label>   <Field type="checkbox" name="transportNo"></Field>
                    </Label>
                    <Label className="TOS">
                        <label htmlFor="TOS">Click here to accept the Terms of Service</label>
                        <Field type="checkbox" name='TOS'></Field>
                    </Label>

                    <p>Save</p>
                    <p >Cancel</p>
                </div>
            </Form>
        </div>
    )
};
export const FormikNannyForm = withFormik({
    mapPropsToValues({name, email, zipcode, availability}) {
        return {
            name : name || '',
            email: email || '',
            zipcode: zipcode,
            timeAvail: availability
        }
    }
})(NannyForm);

// export default connect(null, {})(FormikNannyForm);

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
                        <label htmlFor="firstname">Full Name</label>
                        <Field type='text' name="firstname" placeholder="First Name"/></Label>
                    <Label className="email">
                        <label htmlFor="email">Email Address</label>
                        <Field type="text" name="email" placeholder="Email"/>
                    </Label>
                    <Label className="UserId">
                        <label htmlFor="userId">Zip Code</label>
                        <Field type="text" name="userId" placeholder="User ID"/>
                    </Label>
                    <Label className="time-available">
                        <h3>What is your general availability?</h3>
                        <Field component="select" className="food-select" name="diet">
                            <option>Choose an option</option>
                            <option value="Morning">Morning</option>
                            <option value="Afternoon">Afternoon</option>
                            <option value="Evening">Evening</option>
                            <option value="Overnight">Overnight</option>
                        </Field>
                    </Label>
                    <Label className="driveKids">Are you able to transport childrent to a different location if needed? <br />
                     <label htmlFor="transport">Yes</label>   <Field type="checkbox" name="transportYes"></Field>
                     <label htmlFor="transport">No</label>   <Field type="checkbox" name="transportNo"></Field>
                    </Label>

                    <p>Save</p>
                    <p >Cancel</p>
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

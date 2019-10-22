import React from "react";
import {Route} from "react-router-dom";
import { withFormik, Form, Field } from "formik";

const NannyForm = () =>{
    return (
        <div className="nanny-signup">
            <h1 className="page-title">Sign Up to be a Nanny</h1>
            <Form>
                <label htmlFor="firstname">First Name: </label>
                <Field type='text' name="firstname" placeholder="First Name"/>
                <label htmlFor="lastname">Last Name: </label>
                <Field type='text' name="lastname" placeholder="Last Name"/>
                <label htmlFor="email" name='email'>Email: </label>
                <Field type="text" name="email" placeholder="Email"/>

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

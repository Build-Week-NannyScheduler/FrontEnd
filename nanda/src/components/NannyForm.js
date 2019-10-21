import React from "react";
import {Route} from "react-router-dom";
import {Form, Field} from "formik";

const NannyForm = () =>{
    return (
        <div className="nanny-signup">
            <Form>
                <label htmlFor="firstname">First Name: </label>
                <Field type='text' name="firstname" placeholder="First Name"/>

            </Form>
        </div>
    )
}

export default NannyForm;

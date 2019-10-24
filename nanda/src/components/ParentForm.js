// import React, { useState } from "react";
// import { Route, Link } from "react-router-dom";
// import { connect } from 'react-redux';
// import { registerParent } from '../actions';
// import { withFormik, Field } from "formik";
// import styled from "styled-components";
// import "../App.css";

// const Form = styled.form`
//     display: flex;
//     flex-flow: column wrap; 
// `;

// const Label = styled.label`
// margin: 10px;
// `;
// const ParentForm = (props, { values, errors, touched, status }) =>{
//     const [user, setUser] = useState({});

//     const handleSubmit = e => {
//         e.preventDefault();
//         props.registerParent();
//     };

//     return (
//         <div className="parent-signup">
//             <h1>Welcome to Nanda!</h1>
//             <h1 className="page-title">Create your Parent Profile</h1>
//             <Form onSubmit={handleSubmit}>
//                 <div className='card'>
//                     <Label className="name">
//                         <label htmlFor="name">Name</label>
//                         <Field>
//                             <input type='text' name="name" placeholder="Full Name"/>
//                         </Field> 
//                         </Label>
//                     <Label className="email">
//                         <label htmlFor="email">Email Address</label>
//                         <Field type="text" name="email" placeholder="Email"/>
//                     </Label>
//                     <Label className="zipcode">
//                         <label htmlFor="zipcode">Zip Code</label>
//                         <Field type="text" name="zipcode" placeholder="Zip Code"/>
//                     </Label>
//                     <Label className="numKids"><label>Number of Children</label>
//                         <Field component="select" name="numKids">
//                             <option>Choose an option</option>
//                             <option value="1">1</option>
//                             <option value="2">2</option>
//                             <option value="3">3</option>
//                             <option value="4">4</option>
//                             <option value="5">5</option>
//                             <option value="6">6</option>
//                             <option value="7">7</option>
//                             <option value="8">8</option>
//                             <option value="9">9</option>
//                             <option value="10+">10+</option>
//                         </Field>
//                     </Label>
//                     <Label className="TOS">
//                         <label htmlFor="TOS">Click here to accept the Terms of Service</label>
//                         <Field type="checkbox" name='TOS'></Field>
//                     </Label>
//                     <button className='button' type="submit">Save</button>
//                     <Link to='/protected' className='button'>Cancel</Link>
//                 </div>
//             </Form>
//         </div>
//     )
// };
// const FormikParentForm = withFormik({
//     mapPropsToValue({name, email, zipcode, numKids}) {
//         return {
//             name: name || '',
//             email: email || '',
//             zipcode: zipcode || '',
//             numKids: numKids || '',
//         }
//     }
// })(ParentForm);

// export default FormikParentForm;

import React, { useState } from 'react';
import { connect } from 'react-redux';
import { registerParent } from '../actions';
import axiosWithAuth from '../utils/axiosWithAuth';


const AddParent = props => {
    console.log("ADDPARENT PROPS", props)
    let [newParent, setNewParent] = useState({ 
                            name: '',
                            kids: '',
                            email: '', 
                            zip_code: '',
                            });


    const handleInput = event => {
        setNewParent({
          ...newParent,
          [event.target.name]: event.target.value
        });
      };

    const handleSubmit = e => {
        e.preventDefault();
        props.registerParent(newParent);
        
        // axiosWithAuth()
        //     .post('/user/parent', newParent)
        //     .then(res => console.log('NEW PARENT SUB', res))
        //     .catch(err => console.log(err))
        console.log("NEW PARENT REG", newParent)
    };

    return (
        <form onSubmit={handleSubmit}>
            <input type="text" name="name"  onChange={handleInput} placeholder="Parent Name" />
            <input type="email" name="email"  onChange={handleInput} placeholder="Parent Email" />
            <input type="text" name="zip_code"  onChange={handleInput} placeholder="Parent Zipcode" />

            <label className="numKids" for="kid-select">Number of Children</label>
                         <select id="kid-select" name="kids" onChange={handleInput}>
                             <option value="">Choose an option</option>
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
                         </select>
            <button type="submit">Add Parent!</button>
        </form>
    );
};


export default connect(null, { registerParent })(AddParent);
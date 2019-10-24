import React from "react";
import{withFormik, Field} from "formik";
import styled from "styled-components";
import * as Yup from "yup" ;
import { connect } from 'react-redux';
import axios from "axios";


const Form = styled.form`
    display: flex;
    flex-flow: column wrap;    
    
`;

const Label = styled.label`
margin: 10px;
`;
// export const NannyForm = ({values, touched, errors}) =>{
//     return (
//         <div className="nanny-signup">
//             <h1>Welcome to Nanda!</h1>
//             <h1 className="page-title">Create your Nanny Profile</h1>
//             <Form>
//                 <div className='card'>
//                     <Label className="name">
//                         <label htmlFor="name">Full Name</label>
//                         <Field type='text' name="name" placeholder="Full Name"/></Label>
//                     <Label className="email">
//                         <label htmlFor="email">Email Address</label>
//                         <Field type="text" name="email" placeholder="Email"/>
//                     </Label>
//                     <Label className="zipcode">
//                         <label htmlFor="zipcode">Zip Code</label>
//                         <Field type="text" name="zipcode" placeholder="Zip Code"/>
//                     </Label>
//                     <Label className="time-available">
//                         <h3>What is your general availability?</h3>
//                         <Field component="select" className="timeAvail" name="timeAvail">
//                             <option>Choose an option</option>
//                             <option value="Morning">Morning</option>
//                             <option value="Afternoon">Afternoon</option>
//                             <option value="Evening">Evening</option>
//                             <option value="Overnight">Overnight</option>
//                         </Field>
//                     </Label>
//                     <Label className="driveKids">Are you able to canDrive childrent to a different location if needed? <br />
//                      <label htmlFor="canDrive">Yes</label>   <Field type="checkbox" name="canDriveYes"></Field>
//                      <label htmlFor="canDrive">No</label>   <Field type="checkbox" name="canDriveNo"></Field>
//                     </Label>
//                     <Label className="TOS">
//                         <label htmlFor="TOS">Click here to accept the Terms of Service</label>
//                         <Field type="checkbox" name='TOS'></Field>
//                     </Label>

//                     <button className='button'type="submit">Save</button>
//                     <button className='button'>Cancel</button>
//                 </div>
//             </Form>
//         </div>
//     );
// };
// const FormikNannyForm = withFormik({
//     mapPropsToValues({name, email, zipcode, timeAvail, canDrive}) {
//         return {
//             name : name || '',            
//             email: email || '',
//             zipcode: zipcode || '',
//             timeAvail: timeAvail || '',
//             canDrive: canDrive || false
//         };
//     },
//     validationSchema: Yup.object().shape({
//         zipcode: Yup.string().required(),
//         timeAvail: Yup.string().oneOf(["Morning", "Afternoon", "Evening", "Overnight"]),
        
//     })
//     handleSubmit(values, {setNanny, nanny}) { 
//         axios.post('https://nannytracker2.herokuapp.com/user/nanny', values) 
//               .then(res => console.log(res.data)) 
              
//             //   .catch(err => console.log(err.response));
//         }
// })(NannyForm);

const NannyForm = ({values, touched, errors}) =>{
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
                        <Field component="select" className="timeAvail" name="timeAvail">
                            <option>Choose an option</option>
                            <option value="Morning">Morning</option>
                            <option value="Afternoon">Afternoon</option>
                            <option value="Evening">Evening</option>
                            <option value="Overnight">Overnight</option>
                        </Field>
                    </Label>
                    <Label className="driveKids">Are you able to drive children to a different location if needed? <br />
                        <label htmlFor="canDrive">Yes</label>   <Field type="checkbox" name="canDriveYes"></Field>                     
                    </Label>
                    <Label className="TOS">
                        <label htmlFor="TOS">Click here to accept the Terms of Service</label>
                        <Field type="checkbox" name='TOS'></Field>
                    </Label>

                    <button className='button'type="submit">Save</button>
                    <button className='button'>Cancel</button>
                </div>
            </Form>
        </div>
    )
};
const FormikNannyForm = withFormik({
    mapPropsToValues({name, email, zipcode, timeAvail, canDrive}) {
        return {
            name : name || '',            
            email: email || '',
            zipcode: zipcode || '',
            timeAvail: timeAvail || '',
            canDrive: canDrive || false
        };
    },
    validationSchema: Yup.object().shape({
        zipcode: Yup.string().required(),
        timeAvail: Yup.string().oneOf(["Morning", "Afternoon", "Evening", "Overnight"]),
        
    }),
    handleSubmit(values, {setNanny, nanny}) { 
        axios.post('https://nannytracker2.herokuapp.com/user/nanny', values) 
              .then(res => console.log(res.data)) 
              
            //   .catch(err => console.log(err.response));
        }
})(NannyForm);


export default FormikNannyForm;



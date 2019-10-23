import React from 'react';
import { connect } from "net";
import "../App.css";

const NannyCard = (props) => {
    console.log(props)
    return (
        <div className="nanny-card" >
            {" "}
            {/* Basic info displayed */}
            <h4>Welcome (name)!</h4>
            <p>Name: {}</p>            
            <p>Email: {}</p>
            <p>Time Available: {}</p>
            <p>Drive: {}</p>
            <label> Incoming messages</label>
            <input type="textarea"></input>

            <p className="button">Edit</p>
            <p className="button">Delete</p>
            {/* Buttons to either edit or delete */}
            {/* <button onClick={() => editProfile(}>EDIT</button>{" "}
            <button onClick={() => deleteProfile()}>DELETE</button>{" "}
            {/* Buttons to either edit or delete */}
            {/* <button onClick={() => editProfile(}>Conversation Request</button>{" "}  */}
        </div>
    );
};

export default NannyCard;
// connect(null, {})(NannyCard);
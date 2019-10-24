import React from 'react';


const NannyCard = (props) => {
    console.log("this is props", props)
    return (
        <div className="nanny-card" >
            {" "}
            {/* Basic info displayed */}
            <h4>Welcome {props.name}!</h4>
            <p>Name: {props.name}</p>            
            <p>Email: {props.email}</p>
            <p>Time Available: {props.available}</p>
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
import React from 'react';
import { connect } from "net";
import "../App.css";

const ParentCard = props => {
    return (
        <div className="parent-card card" >
            {/* Basic info displayed */}
            <p>{props.parent.name}</p>
            <p>Zipcode: {props.parent.zipcode}</p>
            <p>Number of kids: {props.parent.numKids}</p>
            {/* Buttons to either edit or delete */}
            {/* <button onClick={() => editParent()}>EDIT</button>
            <button onClick={() => deleteParent()}>DELETE</button> */}
        </div>
    );
};
export default ParentCard;

// export default connect(editParent, deleteParent, {})(ParentCard);
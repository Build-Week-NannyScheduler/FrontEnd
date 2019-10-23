import React from 'react';

const ParentCard = props => {
    return (
        <div className="parent-card card" >
            {/* Basic info displayed */}
            <p>{props.parent.name}</p>
            <p>Zipcode: {props.parent.zipcode}</p>
            <p>Number of kids: {props.parent.numKids}</p>
            {/* Buttons to either edit or delete */}
            {/* <button onClick={e => editParent(e, props.parent.id)}>EDIT</button>
            <button onClick={e => deleteParent(e, props.parent.id)}>DELETE</button> */}
        </div>
    );
};
export default ParentCard;
import React from 'react';

const ParentCard = () => {
    return (
        <div className="parent-card" >
            {" "}
            {/* Basic info displayed */}
            <p> Parent {}</p>
            <p> Age: {}</p>
            <p>Email: {}</p>
            {/* Buttons to either edit or delete */}
            {/* <button onClick={() => editProfile(}>EDIT</button>{" "}
            <button onClick={() => deleteProfile()}>DELETE</button>{" "}
            {/* Buttons to either edit or delete */}
            {/* <button onClick={() => editProfile(}>Conversation Request</button>{" "}  */}
        </div>
    );
};

export default ParentCard;
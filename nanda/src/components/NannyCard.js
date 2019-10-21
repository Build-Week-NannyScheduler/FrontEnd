import React from 'react';

const NannyCard = () => {
    return (
        <div className="nanny-card" >
            {" "}
            {/* Basic info displayed */}
            <p> Name: {}</p>
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

export default NannyCard;
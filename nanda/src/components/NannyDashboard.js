import React from 'react';
import NannyCard from './NannyCard';
import { connect } from "net";

const NannyDashboard = ({ nanny}) => {
    return (
        <div className="dashboard">
            <h1>Welcome Nanny!</h1>
            <NannyCard className="card"
                            key={nanny.id}
                            nanny={nanny}
                            // deleteParent={deleteParent}
                            />
        </div>  
    );
};

export default NannyDashboard;
// connect(null, {})(NannyDashboard);
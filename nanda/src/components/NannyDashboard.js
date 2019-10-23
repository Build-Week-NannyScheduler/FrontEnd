import React from 'react';
import NannyCard from './NannyCard';
import { connect } from "net";

const NannyDashboard = () => {
    return (
        <div className="Dashboard">
            <h1>Welcome Nanny!</h1>
            <NannyCard />
        </div>  
    );
};

export default NannyDashboard;
// connect(null, {})(NannyDashboard);
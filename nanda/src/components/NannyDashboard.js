import React from 'react';
import { connect } from 'react-redux';

import NannyCard from './NannyCard';

const NannyDashboard = () => {
    return (
        <div className="Dashboard">
            <h1>Welcome Nanny!</h1>
            <NannyCard />
        </div>  
    );
};

export default connect(null, {})(NannyDashboard);
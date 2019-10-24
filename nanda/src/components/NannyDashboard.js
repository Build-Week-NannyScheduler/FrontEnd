import React, {useEffect, useState } from 'react';
import { connect } from 'react-redux';

import NannyCard from './NannyCard';
import axios from "axios";

const NannyDashboard = () => {
    const [nanny, setNanny] = useState([]);

    useEffect(() =>{
        axios
        .get(`https://nannytracker2.herokuapp.com/user/nanny/`)
        .then(response => {(console.log(response.data));
        setNanny(response.data);
        })},[])

    return (
        <div className="dashboard">
            <h1>Welcome Nanny!</h1>  
            {nanny.map(nanny => (        
            <NannyCard className="card"
                            key={nanny.id}
                            email={nanny.email}
                            name={nanny.name}
                            available={nanny.availability_start}

                            deleteParent={nanny.deleteParent}
                            />
            ))}  
        </div>  
    );
}

export default NannyDashboard;
// connect(null, {})(NannyDashboard);


import React, {useState, useEffect} from 'react';
import NannyCard from './NannyCard';
import { connect } from "net";
import axios from "axios";

const NannyDashboard = () => {
    const [nanny, setNanny] = useState([]);

    useEffect(() =>{
        axios
        .get('https://nannytracker2.herokuapp.com/user/nanny')
        .then(response => {(console.log(response.data));
        setNanny(response.data);}
        )},[])

    return (
        <div className="dashboard">
            <h1>Welcome Nanny!</h1>
            nanny.filter(item =>)
            <NannyCard className="card"
                            key={nanny.id}
                            // email={email}
                            // name={name}
                            // available={availability_start}

                            // deleteParent={deleteParent}
                            />
        </div>  
    );
}

export default NannyDashboard;
// connect(null, {})(NannyDashboard);


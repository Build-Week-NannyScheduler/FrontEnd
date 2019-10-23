import React from 'react';
import {Link} from "react-router-dom";

const Navigator = () => {
    return (
        <div className="navigator">
            <Link to="/parent"></Link>
            <Link to="/nanny"></Link>
            <Link to="/signup"></Link>
        </div>
    )
};

export default Navigator;
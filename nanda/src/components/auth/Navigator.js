import React from 'react';

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
import React from 'react';
import { BrowserRouter as Router, Switch, Route, Link } from 'react-router-dom';


const ChoicePage = () => {
    return (
        <div className="choicepage">
            <ul>
                {/* <li>
                    <Link exact to="/"></Link>
                </li> */}
                {/* <li>
                    <Link to="/parent">Parent Member Sign In</Link>
                </li>
                <li>
                    <Link to="/nanny">Nanny Member Sign In</Link>
                </li> */}
                <li>
                    <Link to="/nannysignup">I want to use Nanda for my Nanny service scheduling!</Link>
                </li>
                <li>
                    <Link to="/parentsignup">I am a Parent that needs assistance with my kids!</Link>
                </li>
            </ul>
        </div>

    )
}

export default ChoicePage;
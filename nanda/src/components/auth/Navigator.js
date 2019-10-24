import React from 'react';
import { NavLink } from "react-router-dom";
import styled from 'styled-components';


const StyledDiv = styled.div`
    display: flex;
    flex-flow: row wrap;
    justify-content: flex-end;
    align-items: center;
    border-bottom: 1px solid #333333;
    @media (max-width: 500px) {
        padding: 1rem 0;
        flex-direction: column;
    }
    a {
        margin: 1rem 2rem;
        text-decoration: none;
        color: #333333;
        @media (max-width: 500px) {
            margin: 0.5rem;
        }
        &:hover {
            color: #9A9A9A;
        }
    }
`;

const Navigator = props => {
    const logout = (props) => {
        localStorage.removeItem('token');
        }
    return (
        <StyledDiv className="navigator">
            <NavLink to="/protected/parent">ParentDashboard</NavLink>
            <br/>
            <NavLink to="/protected/nanny">NannyDashboard</NavLink>
            <NavLink to="/"><p onClick={logout}>Logout</p></NavLink>
        </StyledDiv>
    );
};

export default Navigator;
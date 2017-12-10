import React from 'react';
import { NavLink } from 'react-router-dom';

const Home = () => {
    return (
        <div>
            <NavLink to="/campuses">campuses</NavLink>
            <NavLink to="/students">students</NavLink>
        </div>
    )
}

export default Home;
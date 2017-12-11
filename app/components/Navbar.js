import React from 'react';
import { NavLink } from 'react-router-dom';

const NavBar = () => {
    return (
        <nav className="navbar navbar-default my-nav">
            <div className="nav-container">
                <div className="navlinks">
                    <NavLink to={`/`}>Home</NavLink>
                    <NavLink to={`/campuses`}>Campuses</NavLink>
                    <NavLink to={`/students`}>Students</NavLink>
                </div>
            </div>
        </nav>
    )
}

export default NavBar;
import React from 'react';
import { NavLink } from 'react-router-dom';

const NavBar = () => {
    return (
        <nav className="navbar navbar-default" id="my-nav">
            <div className="nav-container">
                <div className="navbar-header">
                    <NavLink to={`/`} className="navbar-brand">Home</NavLink>
                </div>
                <div className="navbar-buffer" />
                <div className="navlinks">
                    <NavLink to={`/campuses`}>Campuses</NavLink>
                    <NavLink to={`/students`}>Students</NavLink>
                </div>
            </div>
        </nav>
    )
}

export default NavBar;
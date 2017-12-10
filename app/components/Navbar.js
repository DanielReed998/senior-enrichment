import React from 'react';
import { NavLink } from 'react-router-dom';

const NavBar = () => {
    return (
        <nav className="navbar navbar-default" id="my-nav">
            <div className="nav-container">
                <div className="navbar-header">
                    <a className="navbar-brand" href="#">Stuff</a>
                </div>
                <div className="navbar-buffer"></div>
                <div className="navlinks">
                    <NavLink to={`/campuses`}>Campuses</NavLink>
                    <NavLink to={`/students`}>Students</NavLink>
                </div>
            </div>
        </nav>
    )
}

export default NavBar;
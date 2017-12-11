import React from 'react';
import { NavLink } from 'react-router-dom';
import Chance from'chance';
const chance = new Chance();

const Home = () => {
    const randAboutParagraph = chance.paragraph();
    const randCampusParagraph = chance.paragraph(1);
    const randStudentParagraph = chance.paragraph(1);
    
    return (
        <div>
            <div className="title">
                <h2>Margaret Hamilton Interplanetary Academy of JavaScript</h2>
            </div>
            <div className="about container">
                <h3 data-toggle="collapse" data-target="#aboutParagraph">About the Academy</h3>
                <p id="aboutParagraph" className="collapse">{randAboutParagraph}</p>
            </div>
            <div id="content" className="container">
                <div className="container">
                    <NavLink to="/campuses">
                        Campuses
                    </NavLink>
                    <p>{randCampusParagraph}</p>
                </div>
                <div className="container">
                    <NavLink to="/students">Students</NavLink>
                    <p>{randStudentParagraph}</p>
                </div>
            </div>
        </div>
    )
}

export default Home;
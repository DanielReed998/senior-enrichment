import React, { Component } from 'react';
import { connect } from 'react-redux'; 
import { postCampus, removeCampus } from '../reducers/campus';
import { NavLink } from 'react-router-dom';

function Campuses (props) {

    return (
        <div className="main container">
            <ul className="campus-list">
                {props.campuses.map(campus => {
                    return (
                        <li key={campus.id}>
                            <NavLink to={`/campuses/${campus.id}`}>{campus.name}</NavLink>
                            <img src={campus.imgUrl} className="campus-image"/>
                            <button value={campus.id} onClick={props.handleDelete} className="delete-button">X</button>
                        </li>
                    )
                })}
            </ul>
            <form onSubmit={props.handleSubmit}>
                <label className="add-label" htmlFor="name" data-toggle="collapse" data-target="#add-campus">Add a campus</label>
                <div className="container">
                    <div id="add-campus" className="form-group collapse">
                        <div className="campusInput">
                            <label>Campus Name: </label>
                            <input className="form-control" type="text" name="campusName" placeholder="Enter campus name" />
                        </div>
                        <div className="campusInput">
                            <label>Campus Image URL: </label>
                            <input className="form-control" type="text" name="campusImgUrl" placeholder="Enter campus image url" />
                        </div>
                        <div className="campusInput">
                            <label>Campus Description: </label>
                            <textarea className="form-control" type="text" name="campusDescription" placeholder="Describe the campus..." />
                        </div>
                        <button type="submit" className="btn btn-default">Add Campus</button>                        
                    </div>
                </div>
            </form>
        </div>

    )
    
}

/*----Container----*/

const mapStateToProps = ({campuses}) => {
    return { campuses };
};

const mapDispatchToProps = dispatch => {
    return {
        handleSubmit: (event) => {
            console.log(event.target)
            dispatch(postCampus({name: event.target.campusName.value}))
        },
        handleDelete: (event) => {
            const campusId = event.target.value;
            if (confirm("Do you really want to delete this campus?")) {
                dispatch(removeCampus(campusId));
                alert("Campus successfully deleted!");
            }   
        }
    }
};

export default connect(mapStateToProps, mapDispatchToProps)(Campuses);


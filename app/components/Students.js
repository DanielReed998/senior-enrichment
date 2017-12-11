import React, { Component } from 'react';
import { connect } from 'react-redux'; 
import { postStudent, removeStudent } from '../reducers/student';
import { NavLink } from 'react-router-dom';
import store from '../store';

function Students(props) {

    return (
        <div className="main container">
            <ul>
                {props.students.map(student => {
                    return (
                        <li key={student.id}>
                            <NavLink to={`/students/${student.id}`}>{student.name}</NavLink>
                            <button value={student.id} onClick={props.handleDelete}>X</button>
                        </li>
                    )
                })}
            </ul>
            <form onSubmit={props.handleSubmit}>
                <label htmlFor="name" data-toggle="collapse" data-target="#add-student">Add a student</label>
                <div className="container">
                    <div id="add-student" className="form-group collapse">
                        <input className="form-control" type="text" name="firstName" placeholder="First name" />
                        <input className="form-control" type="text" name="lastName" placeholder="Last name" />
                        <input className="form-control" type="text" name="email" placeholder="Email address" />                        
                        <button type="submit" className="btn btn-default">Add Student</button>
                    </div>
                </div>
            </form>
        </div>

    )
    
}

/*----Container----*/

const mapStateToProps = ({students}) => {
    return { students };
};

const mapDispatchToProps = dispatch => {
    return {
        handleSubmit: (event) => {
            const firstName = event.target.firstName.value;
            const lastName = event.target.lastName.value;
            const email = event.target.email.value;
            dispatch(postStudent({firstName, lastName, email}))
        }, 
        handleDelete: (event) => {
            const studentId = event.target.value;
            if (confirm("Do you really want to delete this student?")) {
                dispatch(removeStudent(studentId));
                alert("Student successfully deleted!");
                
            }
        }
    }
};

export default connect(mapStateToProps, mapDispatchToProps)(Students);

import React, { Component } from 'react';
import { connect } from 'react-redux';
import { fetchStudent, updateStudent } from '../reducers/currentStudent';
import { NavLink } from 'react-router-dom';

class SingleStudent extends Component {

    componentDidMount() {
        this.props.setCurrentStudent(this.props.match.params.studentId)
    }

    render() {
        const currentStudent = this.props.currentStudent;
        return (
            <div className="main container">
                <h1>{currentStudent.name}</h1>
                <div className="student-info">
                    <h3>School: </h3>
                    {currentStudent.campus && (
                        <NavLink to={`/campuses/${currentStudent.campusId}`}>
                            {currentStudent.campus.name}
                        </NavLink>
                        )
                    }
                </div>
                <div className="student-info">
                    <h3>Email: </h3>
                    <h4>{currentStudent.email}</h4>
                </div>
                <div className="student-info">
                    <h3>GPA: </h3>
                    <h4>{currentStudent.gpa}</h4>
                </div>
                <div className="edit-info">
                <form onSubmit={this.props.updateCurrentStudent}>
                    <label className="edit-label" htmlFor="name" data-toggle="collapse" data-target="#edit-student">Edit this student's info</label>
                    <div className="container edit-student">
                        <div id="edit-student" className="form-group collapse">
                            <div className="studentInput">
                                <label>New Student First Name: </label>
                                <input className="form-control" type="text" name="studentFirstName" placeholder="If you don't want to update, leave this area blank." />
                            </div>
                            <div className="studentInput">
                                <label>New Student Last Name: </label>
                                <input className="form-control" type="text" name="studentLastName" placeholder="If you don't want to update, leave this area blank." />
                            </div>
                            <div className="studentInput">
                                <label>New Student Email: </label>
                                <input className="form-control" type="text" name="studentEmail" placeholder="If you don't want to update, leave this area blank." />
                            </div>
                            <div className="studentInput">
                                <label>New Student GPA: </label>
                                <textarea className="form-control" type="text" name="studentGPA" placeholder="If you don't want to update, leave this area blank." />
                            </div>
                            <button type="submit" className="btn btn-default" name="editButton" value={currentStudent.id}>Update Student</button>                        
                        </div>
                    </div>
                </form>
                </div>
            </div>
        )
    }
}


const mapStateToProps = ({currentStudent}) => {
    return ({currentStudent});
}
const mapDispatchToProps = () => dispatch => {
    return {
        setCurrentStudent: (studentId) => {
            dispatch(fetchStudent(studentId))
        },
        updateCurrentStudent: (event) => {
            const studentId = event.target.editButton.value;
            let updates = {}
            
            debugger
            const updatedFirstName = event.target.studentFirstName.value;
            if (updatedFirstName) updates.firstName = updatedFirstName; 
            
            const updatedLastName = event.target.studentLastName.value;
            if (updatedLastName) updates.lastName = updatedLastName; 
            
            const updatedEmail = event.target.studentEmail.value;
            if (updatedEmail) updates.email = updatedEmail; 
            
            const updatedGPA = event.target.studentGPA.value;
            if (updatedGPA) updates.gpa = updatedGPA; 
            
            dispatch(updateStudent(studentId, updates))
        },
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(SingleStudent);


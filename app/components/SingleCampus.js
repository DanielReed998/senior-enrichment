import React, { Component } from 'react';
import { connect } from 'react-redux';
import { NavLink } from 'react-router-dom';
import { fetchCampus, updateCampus } from '../reducers/currentCampus';
import { reEnrollStudent } from '../reducers/student';

class SingleCampus extends Component {

    componentDidMount() {
        this.props.setCurrentCampus(this.props.match.params.campusId)
    }

    render() {

        const currentCampus = this.props.currentCampus;
        return (
            <div className="main container">
                <h1>{currentCampus.name}</h1>
                <div className="campus-info">
                    <div className="campus-info-box">
                        <img src={currentCampus.imgUrl} className="campus-image" />
                    </div>
                    <div className="campus-info-box">
                        <h3>Enrolled Students:</h3>
                        <ul>
                            {currentCampus.students &&
                                currentCampus.students.map(student => {
                                return (
                                    <li key={student.id}>
                                        <NavLink to={`/students/${student.id}`}>
                                            {student.name}
                                        </NavLink>
                                    </li>
                                )
                            })}
                        </ul>
                    </div>
                </div>
                <div className="edit-Info">
                    <form onSubmit={this.props.updateCurrentCampus}>
                        <label className="edit-label" htmlFor="name" data-toggle="collapse" data-target="#edit-campus">Edit this campus</label>
                        <div className="container">
                            <div id="edit-campus" className="form-group collapse">
                                <div className="campusInput">
                                    <label>New Campus Name: </label>
                                    <input className="form-control" type="text" name="campusName" placeholder="If you don't want to update, leave this area blank." />
                                </div>
                                <div className="campusInput">
                                    <label>New Campus Image URL: </label>
                                    <input className="form-control" type="text" name="campusImgUrl" placeholder="If you don't want to update, leave this area blank." />
                                </div>
                                <div className="campusInput">
                                    <label>New Campus Description: </label>
                                    <textarea className="form-control" type="text" name="campusDescription" placeholder="If you don't want to update, leave this area blank." />
                                </div>
                                <button type="submit" className="btn btn-default" name="editButton" value={currentCampus.id}>Update Campus</button>                        
                            </div>
                        </div>
                    </form>
                    <form onSubmit={this.props.enrollStudent}>
                        <label className="edit-label" htmlFor="name" data-toggle="collapse" data-target="#enroll-student">Enroll a student</label>
                        <div className="container">
                            <div id="enroll-student" className="form-group collapse">
                                <div className="studentToEnroll">
                                    <label>Enter name of student to enroll: </label>
                                    <input className="form-control" type="text" name="studentToEnrollFirst" placeholder="Student's first name" />                                    
                                    <input className="form-control" type="text" name="studentToEnrollLast" placeholder="Student's last name" />
                                </div>
                                <button type="submit" className="btn btn-default" name="editButton" value={currentCampus.id}>Enroll Student</button>                        
                            </div>
                        </div>
                    </form>
                </div>
            </div>
        )
    }
}


const mapStateToProps = ({currentCampus}) => {
    return ({currentCampus});
}
const mapDispatchToProps = () => dispatch => {
    return {
        setCurrentCampus: (campusId) => {
            dispatch(fetchCampus(campusId))
        },
        updateCurrentCampus: (event) => {
            const campusId = event.target.editButton.value;

            let updates = {}

            const updatedName = event.target.campusName.value;
            if (updatedName) updates.name = updatedName; 

            const updatedImg = event.target.campusImgUrl.value;
            if (updatedImg) updates.imgUrl = updatedImg; 
            
            const updatedDescription = event.target.campusDescription.value;
            if (updatedDescription) updates.description = updatedDescription; 
            

            dispatch(updateCampus(campusId, updates))
        },
        enrollStudent: (event) => {
            const campusId = event.target.editButton.value;

            const studentFirstName = event.target.studentToEnrollFirst.value;
            const studentLastName = event.target.studentToEnrollLast.value;

            dispatch(reEnrollStudent(studentFirstName, studentLastName, campusId));
        }
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(SingleCampus);


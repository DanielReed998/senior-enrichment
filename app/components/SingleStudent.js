import React, { Component } from 'react';
import { connect } from 'react-redux';
import { fetchStudent } from '../reducers/currentStudent';
import { NavLink } from 'react-router-dom';

class SingleStudent extends Component {

    componentDidMount() {
        this.props.setCurrentStudent(this.props.match.params.studentId)
    }

    render() {
        const currentStudent = this.props.currentStudent;
        return (
            <div>
                <h1>{currentStudent.name}</h1>
                <h3>School: </h3>
                {currentStudent.campus && (
                    <NavLink to={`/campuses/${currentStudent.campusId}`}>
                        {currentStudent.campus.name}
                    </NavLink>
                    )
                }
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
        }
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(SingleStudent);


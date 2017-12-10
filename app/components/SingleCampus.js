import React, { Component } from 'react';
import { connect } from 'react-redux';
import { NavLink } from 'react-router-dom';
import { fetchCampus } from '../reducers/currentCampus';

class SingleCampus extends Component {

    componentDidMount() {
        this.props.setCurrentCampus(this.props.match.params.campusId)
    }

    render() {

        const currentCampus = this.props.currentCampus;
        console.log(currentCampus.students);
        return (
            <div>
            <h1>{currentCampus.name}</h1>
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
        }
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(SingleCampus);


import React, { Component } from 'react';
import { connect } from 'react-redux'; 
import { postStudent } from '../reducers/student';
import { NavLink } from 'react-router-dom';

class AllStudents extends Component {

    constructor(props) {
        super(props)
        this.delete = this.delete.bind(this);
    }

    delete(event) {
        console.log(event.target);
    }

    render() {
        return (
            <div>
                <h1>List o students</h1>
                <ul>
                    {this.props.students.map(student => {
                        return (
                            <li key={student.id}>
                                <NavLink to={`/students/${student.id}`}>{student.name}</NavLink>
                                <button onClick={this.delete} >X</button>
                            </li>
                        )
                    })}
                </ul>
                <form onSubmit={this.props.handleSubmit}>
                    <div className="form-group">
                        <label htmlFor="name">Add a student</label>
                        <input className="form-control" type="text" name="firstName" placeholder="First name" />
                        <input className="form-control" type="text" name="lastName" placeholder="Last name" />
                        <input className="form-control" type="text" name="email" placeholder="Email address" />                        
                    </div>
                    <div className="form-group">
                        <button type="submit" className="btn btn-default">Add Student</button>
                    </div>
                </form>
            </div>

        )
    }
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
            console.log(firstName, lastName, email);
            dispatch(postStudent({firstName, lastName, email}))
        }
    }
};

export default connect(mapStateToProps, mapDispatchToProps)(AllStudents);

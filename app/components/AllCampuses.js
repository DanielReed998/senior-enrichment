import React, { Component } from 'react';
import { connect } from 'react-redux'; 
import { postCampus } from '../reducers/campus'

class AllCampuses extends Component {

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
                <h1>List o campuses</h1>
                <ul>
                    {this.props.campuses.map(campus => {
                        return (
                            <li key={campus.id}>
                                <span>{campus.name}</span>
                                <button onClick={this.delete}>X</button>
                            </li>
                        )
                    })}
                </ul>
                <form onSubmit={this.props.handleSubmit}>
                    <div className="form-group">
                        <label htmlFor="name">Add a campus</label>
                        <input className="form-control" type="text" name="campus" placeholder="Enter campus name" />
                    </div>
                    <div className="form-group">
                        <button type="submit" className="btn btn-default">Add Campus</button>
                    </div>
                </form>
            </div>

        )
    }
}

/*----Container----*/

const mapStateToProps = ({campuses}) => {
    return { campuses };
};

const mapDispatchToProps = dispatch => {
    return {
        handleSubmit: (event) => {
            console.log(event.target)
            dispatch(postCampus({name: event.target.campus.value}))
        }
    }
};

export default connect(mapStateToProps, mapDispatchToProps)(AllCampuses);


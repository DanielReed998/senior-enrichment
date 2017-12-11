import React, { Component } from 'react';
import { connect } from 'react-redux';
import createBrowserHistory from 'history/createBrowserHistory';
import { Route, Switch, Redirect, withRouter } from 'react-router-dom';

import store from './store';
import { fetchCampuses } from './reducers/campus'
import { fetchStudents } from './reducers/student'

// import Root from './components/Root';
import Campuses from './components/Campuses';
import SingleCampus from './components/SingleCampus';
import Students from './components/Students';
import SingleStudent from './components/SingleStudent';
import Home from './components/Home'
import Navbar from './components/Navbar';
import Footer from './components/Footer';
import ErrorPage from './components/ErrorPage';


const browserHistory = createBrowserHistory();

function Main ({ fetchCampusData, fetchStudentData }) {
     
    return (
        <div>  
            <Navbar />
            <main>
                <Switch>
                    <Route exact path="/" component={Home} />
                    <Route exact path="/campuses" component={Campuses} onEnter={fetchCampusData()}/>
                    <Route exact path="/campuses/:campusId" component={SingleCampus} />
                    <Route exact path="/students" component={Students} onEnter={fetchStudentData()}/>
                    <Route exact path="/students/:studentId" component={SingleStudent} />                    
                    <Route exact path="/error" component={ErrorPage} />
                    <Redirect to="/error" component={ErrorPage} />
                </Switch>
            </main>
            <Footer />
        </div>   
    )
    
}

const mapDispatchToProps = () => dispatch => {
    return {
        fetchCampusData: () => {
            dispatch(fetchCampuses())
        },
        fetchStudentData: () => {
            dispatch(fetchStudents())            
        }
    }
}

export default withRouter(connect(null, mapDispatchToProps)(Main));






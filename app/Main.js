import React, { Component } from 'react';
import { connect } from 'react-redux';
import createBrowserHistory from 'history/createBrowserHistory';
import { Route, Switch, Redirect } from 'react-router-dom';

import store from './store';
import { fetchCampuses } from './reducers/campus'

import Root from './components/Root';
import AllCampuses from './components/AllCampuses';
import AllStudents from './components/AllStudents';
import Home from './components/Home'
import Navbar from './components/Navbar';
import Footer from './components/Footer';
import ErrorPage from './components/ErrorPage';


const browserHistory = createBrowserHistory();

function Main ({fetchInitialData}) {
     
    return (
        <div>  
            <Navbar />
            <main>
                <Switch>
                    <Route exact path="/" component={Home} />
                    <Route exact path="/campuses" component={AllCampuses} onEnter={fetchInitialData()}/>
                    <Route exact path="/students" component={AllStudents} />
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
        fetchInitialData: () => {
            dispatch(fetchCampuses())
        }
    }
}

export default connect(null, mapDispatchToProps)(Main);






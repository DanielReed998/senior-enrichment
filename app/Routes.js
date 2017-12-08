import React, { Component } from 'react';
import { connect } from 'react-redux';
import createBrowserHistory from 'history/createBrowserHistory';
import { Router, Route, Switch, Redirect } from 'react-router-dom';

import Root from './components/Root';
import AllCampuses from './components/AllCampuses';
import AllStudents from './components/AllStudents';
import Home from './components/Home'
import Navbar from './components/Navbar';
import Footer from './components/Footer';


const browserHistory = createBrowserHistory();

const Routes = () => {
    return (
    // <Router history={browserHistory}>
    //     <Route path="/" component={Root}>
    //         <IndexRoute component={Home} />
    //         <Route path="campuses" component={AllCampuses} />
    //         <Route path="students" component={AllStudents} />
    //         <Route path="*" component={Home} />
    //     </Route>
    // </Router> 
        <Router history={browserHistory}>
            <div>  
                <Navbar />
                    <Switch>
                        <Route exact path="/" component={Home} />
                        <Route exact path="campuses" component={AllCampuses} />
                        <Route exact path="students" component={AllStudents} />
                        {/*<Redirect to="/" />*/}
                    </Switch>
                <Footer />
            </div>
        </Router>
    )
}

export default Routes;
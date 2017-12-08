'use strict'

import React from 'react'
import RectDOM from 'react-dom';
import { BrowserRouter as Router } from 'react-router-dom';
import { Provider } from 'react-redux'
import Main from './Main'
import store from './store'

ReactDOM.render( 
    <Provider store = { store }>
        <Router>
            <Main />
        </Router>
    </Provider>,
    document.getElementById('main')
)


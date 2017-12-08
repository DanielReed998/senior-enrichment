'use strict'
import React from 'react'
import { render } from 'react-dom'
import { Provider } from 'react-redux'

import store from './store'
import Root from './components/Root'

const unsubscribe = store.subscribe(function() {
    console.log('----------------');
    console.log('State changed!!', store.getState());
});

unsubscribe();

render( 
  <Provider store = { store }>
    <Root />
  </Provider>,
  document.getElementById('main')
)
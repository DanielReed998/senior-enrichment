import { createStore, applyMiddleware } from 'redux';
import reducer from './reducers';
import loggingMiddleware from 'redux-logger'; // https://github.com/evgenyrodionov/redux-logger
import thunkMiddleware from 'redux-thunk'; // https://github.com/gaearon/redux-thunk

// console.log('store fetchCampuses: ', )
export default createStore(reducer, applyMiddleware(thunkMiddleware))

// , loggingMiddleware
/* combineReducers is not currently used, but eventually should be for modular code :D */
import { combineReducers } from 'redux';
import campuses from './campus';
import students from './student';
import currentCampus from './currentCampus';
import currentStudent from './currentStudent';


// console.log('reducers/index', campusReducer)
export default combineReducers({ campuses, currentCampus, students, currentStudent });

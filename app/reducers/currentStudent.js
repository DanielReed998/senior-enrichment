import axios from 'axios';

/*----ACTION TYPES----*/

const SET_CURRENT_STUDENT = "SET_CURRENT_STUDENT";

/*----ACTION CREATORS----*/

export function createSetCurrentStudentAction(student) {
    return {
        type: SET_CURRENT_STUDENT,
        student
    }
}

/*----THUNKS----*/

export function fetchStudent(id) {
    return dispatch => {
        axios.get(`/api/students/${id}`)
        .then(res => {
            return res.data;
        })
        .then(student => {
            dispatch(createSetCurrentStudentAction(student))
        })
        .catch(err => console.error(err));
    }   
}

/*----REDUCER----*/

export default function reducer (state={}, action) {
    switch (action.type) {
        case SET_CURRENT_STUDENT:
            return action.student;
        default:
            return state;
    }
}
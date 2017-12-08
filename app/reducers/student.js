import axios from 'axios';
// ACTION-TYPES

const GET_STUDENT = "GET_STUDENT"
const GET_STUDENTS = "GET_STUDENTS"


// ACTION CREATORS

export function createGetStudentAction (student) {
    return {
        type: GET_STUDENT,
        student
    }
}

export function createGetStudentsAction (students) {
    return {
        type: GET_STUDENTS,
        students
    }
}


//THUNK CREATORS

export function fetchStudents () {
    return (dispatch) => {
        return axios.get('/api/students')
            .then(res => {
                dispatch(createGetStudentsAction(res.data));
            })
            .catch(err => console.error(err));
    }
}


// REDUCER

export default function reducer (state = [], action) {
    switch (action.type) {
        case GET_STUDENTS:
            return action.students;
        case GET_STUDENT:
            return [...state, action.student];
        default:
            return state;
    }
}
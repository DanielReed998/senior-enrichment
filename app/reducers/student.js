import axios from 'axios';
// ACTION-TYPES

const GET_STUDENT = "GET_STUDENT"
const GET_STUDENTS = "GET_STUDENTS"
const DELETE_STUDENT = "DELETE_STUDENT"
const UPDATE_STUDENT_CAMPUS = "UPDATE_STUDENT_CAMPUS"


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

export function createDeleteStudentAction (student) {
    return {
        type: DELETE_STUDENT,
        student
    }
}

export function createUpdateStudentCampusAction (student) {
    return {
        type: UPDATE_STUDENT_CAMPUS,
        student
    }
}


//THUNK CREATORS

export function fetchStudents () {
    return (dispatch) => {
        axios.get('/api/students')
            .then(res => {
                dispatch(createGetStudentsAction(res.data));
            })
            .catch(err => console.error(err));
    }
}

export function postStudent (student) {
    return dispatch => {
        axios.post('/api/students', student)
        .then(res => {
            dispatch(createGetStudentAction(res.data))
        })
        .then(() => {
            console.log('student successfully added!')
        })
        .catch(err => console.error(err));
    }
}

export function removeStudent (studentId) {
    return dispatch => {
        axios.delete(`/api/students/${studentId}`)
        .then(res => {
            dispatch(createDeleteStudentAction(res.data))
        })
        .then(() => {
            console.log('student successfully deleted!')
        })
        .catch(err => console.error(err));
    }
}

export function reEnrollStudent (studentFirstName, studentLastName, campusId) {
    return dispatch => {
        axios.put(`/api/students`, {
            firstName: studentFirstName,
            lastName: studentLastName,
            campusId
        })
        .then(res => {
            return res.data
        })
        .then(student => {
            dispatch(updateStudentCampus(student))
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
        case DELETE_STUDENT:
            console.log(action);
            return state.filter(student => student.id !== action.student.id)
        case UPDATE_STUDENT_CAMPUS:
            return state.map(student => {
                if (student.id === action.student.id) {
                    student.campusId = action.student.campusId;
                }
                return student;
            })
        default:
            return state;
    }
}
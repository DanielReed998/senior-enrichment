import axios from 'axios';
// ACTION-TYPES

const ADD_CAMPUS = "ADD_CAMPUS"
const GET_CAMPUSES = "GET_CAMPUSES"
const DELETE_CAMPUS = "DELETE_CAMPUS"


// ACTION CREATORS

export function createAddCampusAction (campus) {
    return {
        type: ADD_CAMPUS,
        campus
    }
}

export function createGetCampusesAction (campuses) {
    return {
        type: GET_CAMPUSES,
        campuses
    }
}

export function createDeleteCampusAction (campus) {
    return {
        type: DELETE_CAMPUS,
        campus
    }
}


//THUNK CREATORS

export function fetchCampuses () {
    return (dispatch) => {
        return axios.get('/api/campuses')
            .then(res => {
                dispatch(createGetCampusesAction(res.data));
            })
            .catch(err => console.error(err));
    }
}

export function postCampus (campus) {
    return dispatch => {
        return axios.post('/api/campuses', campus)
        .then(res => {
            dispatch(createAddCampusAction(res.data));
        })
        .then(() => {
            console.log('campus successfully added!')
        })
        .catch(err => console.error(err));
    }
}

export function removeCampus (campusId) {
    return dispatch => {
        axios.delete(`/api/campuses/${campusId}`)
        .then(res => {
            dispatch(createDeleteCampusAction(res.data))
        })
        .then(() => {
            console.log('campus successfully deleted!')
        })
        .catch(err => console.error(err));
    }
}


// REDUCER

export default function reducer (state = [], action) {
    switch (action.type) {
        case GET_CAMPUSES:
            return action.campuses;
        case ADD_CAMPUS:
            return [...state, action.campus];
        case DELETE_CAMPUS:
            console.log(action);
            return state.filter(campus => campus.id !== action.campus.id)
        default:
            return state;
    }
}
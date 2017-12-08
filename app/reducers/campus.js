import axios from 'axios';
// ACTION-TYPES

const GET_CAMPUS = "GET_CAMPUS"
const GET_CAMPUSES = "GET_CAMPUSES"


// ACTION CREATORS

export function createGetCampusAction (campus) {
    return {
        type: GET_CAMPUS,
        campus
    }
}

export function createGetCampusesAction (campuses) {
    return {
        type: GET_CAMPUSES,
        campuses
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
            dispatch(createGetCampusAction(res.data));
        })
        .then(() => {
            console.log('campus successfully added!')
        })
        .catch(err => console.error(err));
    }
}


// REDUCER

export default function reducer (state = [], action) {
    switch (action.type) {
        case GET_CAMPUSES:
            return action.campuses;
        case GET_CAMPUS:
            return [...state, action.campus];
        default:
            return state;
    }
}
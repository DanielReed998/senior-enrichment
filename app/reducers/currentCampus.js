import axios from 'axios';

/*----ACTION TYPES----*/

const SET_CURRENT_CAMPUS = "SET_CURRENT_CAMPUS";
const UPDATE_CURRENT_CAMPUS = "UPDATE_CURRENT_CAMPUS";

/*----ACTION CREATORS----*/

export function createSetCurrentCampusAction(campus) {
    return {
        type: SET_CURRENT_CAMPUS,
        campus
    }
}

export function createUpdateCurrentCampusAction(campus) {
    return {
        type: UPDATE_CURRENT_CAMPUS,
        campus
    }
}

/*----THUNKS----*/

export function fetchCampus(id) {
    return dispatch => {
        axios.get(`/api/campuses/${id}`)
        .then(res => {
            return res.data;
        })
        .then(campus => {
            dispatch(createSetCurrentCampusAction(campus))
        })
        .catch(err => console.error(err));
    }
}

export function updateCampus(id, updates) {
    return dispatch => {
        axios.put(`/api/campuses/${id}`, updates)
        .then(res => {
            return res.data
        })
        .then(updatedCampus => {
            dispatch(createUpdateCurrentCampusAction(updatedCampus));
        })
    }
}

/*----REDUCER----*/

export default function reducer(state={}, action) {
    switch (action.type){
        case SET_CURRENT_CAMPUS || UPDATE_CURRENT_CAMPUS:
            return action.campus;
        default:
            return state;
    }
}
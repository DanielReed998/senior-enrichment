import axios from 'axios';

/*----ACTION TYPES----*/

const SET_CURRENT_CAMPUS = "SET_CURRENT_CAMPUS";

/*----ACTION CREATORS----*/

export function createSetCurrentCampusAction(campus) {
    return {
        type: SET_CURRENT_CAMPUS,
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

/*----REDUCER----*/

export default function reducer(state={}, action) {
    switch (action.type){
        case SET_CURRENT_CAMPUS:
            return action.campus;
        default:
            return state;
    }
}
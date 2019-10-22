import axios from 'axios';
import axiosWithAuth from '../utils/axiosWithAuth';

export const START_FETCHING = 'START_FETCHING';
export const FETCH_SUCCESS = 'FETCH_SUCCESS';
export const FETCH_FAILURE = 'FETCH_FAILURE';

export const POST_DATA = 'POST_DATA';
export const POST_DATA_SUCCESS = 'POST_DATA_SUCCESS';
export const POST_DATA_FAILURE = 'POST_DATA_FAILURE';

export const DELETE_DATA = 'DELETE_DATA';
export const DELETE_DATA_SUCCESS = 'DELETE_DATA_SUCCESS';
export const DELETE_DATA_FAILURE = 'DELETE_DATA_FAILURE';


export const fetchFacts = () => dispatch => {
    dispatch({ type: START_FETCHING });

    //do some async action and dispatch an error or success action
    axiosWithAuth
        .get('/')
        .then(res => dispatch({ type: FETCH_SUCCESS, payload: res.data }))
        .catch(err => dispatch({ type: FETCH_FAILURE, payload: err.response }));
}
 
export const editUser = () => dispatch => {
    dispatch({ type: POST_DATA })
    axiosWithAuth
        .post('/')
        .then(res => dispatch({ type: POST_DATA_SUCCESS, payload: res.data }))
        .catch(err => dispatch({ type: POST_DATA_FAILURE, payload: err.response }));
}

export const deleteUser = () => dispatch => {
    dispatch({ type: DELETE_DATA })
    axiosWithAuth
        .post('/')
        .then(res => dispatch({ type: DELETE_DATA_SUCCESS, payload: res.data }))
        .catch(err => dispatch({ type: DELETE_DATA_FAILURE, payload: err.response }));
}
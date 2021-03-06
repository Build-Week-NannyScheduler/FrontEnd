// WHAT DOES AN ACTION DO?
// 
import axios from 'axios';
import axiosWithAuth from '../utils/axiosWithAuth';

export const START_FETCHING = 'START_FETCHING';
export const FETCH_SUCCESS = 'FETCH_SUCCESS';
export const FETCH_FAILURE = 'FETCH_FAILURE';

// export const POST_DATA = 'POST_DATA';
// export const POST_DATA_SUCCESS = 'POST_DATA_SUCCESS';
// export const POST_DATA_FAILURE = 'POST_DATA_FAILURE';

// export const DELETE_DATA = 'DELETE_DATA';
// export const DELETE_DATA_SUCCESS = 'DELETE_DATA_SUCCESS';
// export const DELETE_DATA_FAILURE = 'DELETE_DATA_FAILURE';

export const FETCH_PARENT = 'FETCH_PARENT';
export const FETCH_PARENT_SUCCESS = 'FETCH_PARENT_SUCCESS';
export const FETCH_PARENT_FAILURE = 'FETCH_PARENT_FAILURE';

export const POST_PARENT = 'POST_PARENT'; 
export const POST_PARENT_SUCCESS= 'POST_PARENT_SUCCESS'; 
export const POST_PARENT_FAILURE= 'POST_PARENT_FAILURE'; 

export const UPDATE_PARENT = 'UPDATE_PARENT'; 
export const UPDATE_PARENT_SUCCESS = 'UPDATE_PARENT_SUCCESS'; 
export const UPDATE_PARENT_FAILURE = 'UPDATE_PARENT_FAILURE'; 

export const DELETE_PARENT = 'DELETE_PARENT'; 
export const DELETE_PARENT_SUCCESS = 'DELETE_PARENT_SUCCESS'; 
export const DELETE_PARENT_FAILURE = 'DELETE_PARENT_FAILURE'; 

export const FETCH_NANNY = 'FETCH_NANNY';
export const FETCH_NANNY_SUCCESS = 'FETCH_NANNY_SUCCESS';
export const FETCH_NANNY_FAILURE = 'FETCH_NANNY_FAILURE';

export const POST_NANNY = 'POST_NANNY'; 
export const POST_NANNY_SUCCESS= 'POST_NANNY_SUCCESS'; 
export const POST_NANNY_FAILURE= 'POST_NANNY_FAILURE'; 

export const UPDATE_NANNY= 'UPDATE_NANNY'; 
export const UPDATE_NANNY_SUCCESS= 'UPDATE_NANNY_SUCCESS'; 
export const UPDATE_NANNY_FAILURE= ''; 

export const DELETE_NANNY = 'DELETE_NANNY'; 
export const DELETE_NANNY_SUCCESS = 'DELETE_NANNY_SUCCESS'; 
export const DELETE_NANNY_FAILURE  = 'DELETE_NANNY_FAILURE';


export const fetchUser = () => dispatch => {
    dispatch({ type: START_FETCHING });
    axiosWithAuth()
        .get('/auth/')
        .then(res => dispatch({ type: FETCH_SUCCESS, payload: res.data }))
        .catch(err => dispatch({ type: FETCH_FAILURE, payload: err.response }));
};

export const registerParent = (props, newParent) => dispatch => {
    dispatch({ type: POST_PARENT });
    axiosWithAuth()
        .post('/user/parent', newParent)
        .then(res => {
            console.log("Back from registration", res)
            dispatch({ type: POST_PARENT_SUCCESS, payload: res.data })
            props.history.push('/protected/parent')
        })
        .catch(err => dispatch({ type: POST_PARENT_FAILURE, payload: err.response }));
};

export const fetchParent = () => dispatch => {
    dispatch({ type: FETCH_PARENT });
    axiosWithAuth()
        .get('/user/parent')
        .then(res => dispatch({ type: FETCH_PARENT_SUCCESS, payload: res.data }))
        .catch(err => dispatch({ type: FETCH_PARENT_FAILURE, payload: err.response }));
};
 
export const editParent = id => dispatch => {
    dispatch({ type: UPDATE_PARENT })
    axiosWithAuth()
        .put('/user/parent/:id', id)
        .then(res => dispatch({ type: UPDATE_PARENT_SUCCESS, payload: res.data }))
        .catch(err => dispatch({ type: UPDATE_PARENT_FAILURE, payload: err.response }));
};

export const deleteParent = id => dispatch => {
    dispatch({ type: DELETE_PARENT })
    axiosWithAuth()
        .delete('/user/parent/:id', id)
        .then(res => dispatch({ type: DELETE_PARENT_FAILURE, payload: res.data }))
        .catch(err => dispatch({ type: DELETE_PARENT_FAILURE, payload: err.response }));
};

export const registerNannie = () => dispatch => {
    dispatch({ type: POST_NANNY });
    axiosWithAuth()
        .post('/user/nanny')
        .then(res => dispatch({ type: POST_NANNY_SUCCESS, payload: res.data }))
        .catch(err => dispatch({ type: POST_NANNY_FAILURE, payload: err.response }));
};

export const fetchNanny = (id) => dispatch => {
    console.log("At least FETCH NANNY getting called!");
    dispatch({ type: FETCH_NANNY });
    axiosWithAuth()
        .get('/user/nanny/${id}', id)
        .then(res => dispatch({ type: FETCH_NANNY_SUCCESS, payload: res.data }))
        .catch(err => dispatch({ type: FETCH_NANNY_FAILURE, payload: err.response }));
};
 
export const editNanny = id => dispatch => {
    dispatch({ type: UPDATE_NANNY })
    axiosWithAuth()
        .put('/user/nanny/:id', id)
        .then(res => dispatch({ type: UPDATE_NANNY_SUCCESS, payload: res.data }))
        .catch(err => dispatch({ type: UPDATE_NANNY_FAILURE, payload: err.response }));
};

export const deleteNanny = id => dispatch => {
    dispatch({ type: DELETE_NANNY })
    axiosWithAuth()
        .delete('/user/nanny/:id', id)
        .then(res => dispatch({ type: DELETE_NANNY_SUCCESS, payload: res.data }))
        .catch(err => dispatch({ type: DELETE_NANNY_FAILURE, payload: err.response }));
};
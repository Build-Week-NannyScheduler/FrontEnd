// WHAT DOES A REDUCER DO?
// It calculates the next state tree based on the previous state tree and the action dispatched to make it happen.

import { START_FETCHING, FETCH_SUCCESS, FETCH_FAILURE, 
    FETCH_PARENT, FETCH_PARENT_SUCCESS, FETCH_PARENT_FAILURE,     
    POST_PARENT, POST_PARENT_SUCCESS, POST_PARENT_FAILURE, 
    UPDATE_PARENT, UPDATE_PARENT_SUCCESS, UPDATE_PARENT_FAILURE, 
    DELETE_PARENT, DELETE_PARENT_SUCCESS, DELETE_PARENT_FAILURE, 
    FETCH_NANNY, FETCH_NANNY_SUCCESS, FETCH_NANNY_FAILURE,         
    POST_NANNY, POST_NANNY_SUCCESS, POST_NANNY_FAILURE, 
    UPDATE_NANNY, UPDATE_NANNY_SUCCESS, UPDATE_NANNY_FAILURE, 
    DELETE_NANNY, DELETE_NANNY_SUCCESS, DELETE_NANNY_FAILURE } from '../actions';

const initialState = {
    isFetching: false,
    isPosting: false,
    isUpdating: false,
    isDeleting: false,
    error: '',
    nannies: [{
        name: "",
        email: "",
        zipcode: "",
        timeAvail: "",
        canDrive: false
    }],
    parents: [{
        name: "",
        email: "",
        zip_code: "",
        kids: 0
    }],
};

const reducer = (state = initialState, action) => {
    switch(action.type) {
        case START_FETCHING:
            return {
                ...state,
                isFetching: true,
                error: ''
            };
        case FETCH_SUCCESS:
            return {
                ...state,
                isFetching: false,
                error: '',
                user: action.payload
            };
        case FETCH_FAILURE:
            return {
                ...state,
                isFetching: false,
                error: action.payload
            };

        case FETCH_PARENT:
            return {
                ...state,
                isFetching: true,
                error: ''
            };
        case FETCH_PARENT_SUCCESS:
            return {
                ...state,
                isFetching: false,
                error: '',
                parents: [...action.payload]
            };
        case FETCH_PARENT_FAILURE:
            return {
                ...state,
                isFetching: false,
                error: action.payload
            };
    
        case POST_PARENT:
            return {
                ...state,
                isPosting: true,
                error: ''
            };
        case POST_PARENT_SUCCESS:
            return {
                ...state,
                isPosting: false,
                error: '',
                parents: [...state.parents, ...action.payload]
            };
        case POST_PARENT_FAILURE:
            return {
                ...state,
                isPosting: false,
                error: action.payload
            };

        case UPDATE_PARENT:
            return {
                ...state,
                isUpdating: true,
                error: ''
            };
        case UPDATE_PARENT_SUCCESS:
            return {
                ...state,
                isUpdating: false,
                error: '',
                parents: [...action.payload]
            };
        case UPDATE_PARENT_FAILURE:
            return {
                ...state,
                isUpdating: false,
                error: action.payload
            };
    
        case DELETE_PARENT:
            return {
                ...state,
                isDeleting: true,
                error: ''
            };
        case DELETE_PARENT_SUCCESS:
            return {
                ...state,
                isDeleting: false,
                error: '',
                parents: [...!action.payload]
            };
        case DELETE_PARENT_FAILURE:
            return {
                ...state,
                isDeleting: false,
                error: action.payload
            };

        case FETCH_NANNY:
            return {
                ...state,
                isFetching: true,
                error: ''
                };
        case FETCH_NANNY_SUCCESS:
            return {
                ...state,
                isFetching: false,
                error: '',
                nannies: [...action.payload]
            };
        case FETCH_NANNY_FAILURE:
            return {
                ...state,
                isFetching: false,
                error: action.payload
            };


        case POST_NANNY:
            return {
                ...state,
                isPosting: true,
                error: ''
            };
        case POST_NANNY_SUCCESS:
            return {
                ...state,
                isPosting: false,
                error: '',
                nannies: [...action.payload]
            };
        case POST_NANNY_FAILURE:
            return {
                ...state,
                isPosting: false,
                error: action.payload
            };
    
        case UPDATE_NANNY:
            return {
                ...state,
                isUpdating: true,
                error: ''
            };
        case UPDATE_NANNY_SUCCESS:
            return {
                ...state,
                isUpdating: false,
                error: '',
                nannnies: [...action.payload]
            };
        case UPDATE_NANNY_FAILURE:
            return {
                ...state,
                isUpdating: false,
                error: action.payload
            };
    
        case DELETE_NANNY:
            return {
                ...state,
                isDeleting: true,
                error: ''
            };
        case DELETE_NANNY_SUCCESS:
            return {
                ...state,
                isDeleting: false,
                error: '',
                nannies: [...action.payload]
            };
        case DELETE_NANNY_FAILURE:
            return {
                ...state,
                isDeleting: false,
                error: action.payload
            };
        default:
            return state;
    };
};

export default reducer;
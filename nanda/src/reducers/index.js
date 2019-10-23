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
    updateParent: false,
    updateNanny: false,
    deleteParent: false,
    deleteNanny: false,
    nannyRequest: false,
    nannyAccept: null,
    error: '',
    currentUser: {

    },
    nannies: [{
        name: "",
        email: "",
        zipcode: "",
        timeAvail: "",
        canDrive: false,
        likesJob: null
    }],
    parents: [{
        name: "",
        numKids: 0,
        email: "",
        zipcode: "",
        nannyRequest: null
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
                parent: action.payload
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
                updateParent: true,
                error: ''
            };
        case POST_PARENT_SUCCESS:
            return {
                ...state,
                updateParent: false,
                error: '',
                parent: action.payload
            };
        case POST_PARENT_FAILURE:
            return {
                ...state,
                updateParent: false,
                error: action.payload
            };

        case UPDATE_PARENT:
            return {
                ...state,
                updateParent: true,
                error: ''
            };
        case UPDATE_PARENT_SUCCESS:
            return {
                ...state,
                updateParent: false,
                error: '',
                parent: action.payload
            };
        case UPDATE_PARENT_FAILURE:
            return {
                ...state,
                updateParent: false,
                error: action.payload
            };
    
        case DELETE_PARENT:
            return {
                ...state,
                deleteParent: true,
                error: ''
            };
        case DELETE_PARENT_SUCCESS:
            return {
                ...state,
                deleteParent: false,
                error: '',
                data: action.payload
            };
        case DELETE_PARENT_FAILURE:
            return {
                ...state,
                deleteParent: false,
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
                nannies: action.payload
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
                updateNanny: true,
                error: ''
            };
        case POST_NANNY_SUCCESS:
            return {
                ...state,
                updateNanny: false,
                error: '',
                nanny: action.payload
            };
        case POST_NANNY_FAILURE:
            return {
                ...state,
                updateNanny: false,
                error: action.payload
            };
    
        case UPDATE_NANNY:
            return {
                ...state,
                updateNanny: true,
                error: ''
            };
        case UPDATE_NANNY_SUCCESS:
            return {
                ...state,
                updateNanny: false,
                error: '',
                nanny: action.payload
            };
        case UPDATE_NANNY_FAILURE:
            return {
                ...state,
                updateNanny: false,
                error: action.payload
            };
    
        case DELETE_NANNY:
            return {
                ...state,
                deleteNanny: true,
                error: ''
            };
        case DELETE_NANNY_SUCCESS:
            return {
                ...state,
                deleteNanny: false,
                error: '',
                nanny: action.payload
            };
        case DELETE_NANNY_FAILURE:
            return {
                ...state,
                deleteNanny: false,
                error: action.payload
            };
        default:
            return state;
    };
};

export default reducer;
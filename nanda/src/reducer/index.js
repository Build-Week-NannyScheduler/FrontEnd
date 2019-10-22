import { START_FETCHING, FETCH_SUCCESS, FETCH_FAILURE, POST_DATA, POST_DATA_SUCCESS, POST_DATA_FAILURE, DELETE_DATA, DELETE_DATA_SUCCESS, DELETE_DATA_FAILURE } from '../actions';

const initialState = {
    nannies: [],
    isFetching: false,
    error: ''
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
                breweries: action.payload
            };
        case FETCH_FAILURE:
            return {
                ...state,
                isFetching: false,
                error: action.payload
            };

        case POST_DATA:
            return {
                ...state,
                isFetching: true,
                error: ''
            };
        case POST_DATA_SUCCESS:
            return {
                ...state,
                isFetching: false,
                error: '',
                breweries: action.payload
            };
        case POST_DATA_FAILURE:
            return {
                ...state,
                isFetching: false,
                error: action.payload
            };

        case DELETE_DATA:
            return {
                ...state,
                isFetching: true,
                error: ''
            };
        case DELETE_DATA_SUCCESS:
            return {
                ...state,
                isFetching: false,
                error: '',
                breweries: action.payload
            };
        case DELETE_DATA_FAILURE:
            return {
                ...state,
                isFetching: false,
                error: action.payload
            };
        default:
            return state;
    };
};

export default reducer;
import {
    SIGNUP_START,
    SIGNUP_SUCCESS,
    SIGNUP_FAILURE,
    LOGIN_START,
    LOGIN_SUCCESS,
    LOGIN_FAILURE,
    ADD_EVENT_START,
    ADD_EVENT_SUCCESS,
    ADD_EVENT_FAILURE,
    EDIT_EVENT_START,
    EDIT_EVENT_SUCCESS,
    EDIT_EVENT_FAILURE,
    FETCH_DATA_START,
    FETCH_DATA_SUCCESS,
    FETCH_DATA_FAILURE,
    USER_UNAUTHORIZED,
    DELETE_START,
    DELETE_SUCCESS,
    DELETE_FAILURE
} from '../actions'

const initialState ={
    signingUp: false,
    location: null,
    interests: [],
    events: [],
    loggingIn: false,
    addingEvent: false, 
    deletingEvent: false,
    editingEvent: false,
    error: '',
    errorStatusCode:null,
    fetchingEvents: false,
    token: localStorage.getItem('token')
}

const reducer = (state = initialState, action) => {
    switch(action.type){
        case SIGNUP_START:
        return {
            ...state,
            signingUp: true
        };
        case SIGNUP_SUCCESS:
        return {
            ...state,
            signingUp: false,
            token: action.payload,
            location: '',
            interest: {
                ...this.state.interests,
                interest: '',
            }
        };
        case SIGNUP_FAILURE:
        return {
            ...state,
            signingUp: false,
            error: action.payload
        };
        case LOGIN_START:
        return {
            ...state,
            loggingIn: true
        };
        case LOGIN_SUCCESS:
        return {
            ...state,
            loggingIn: false,
            token: action.payload,
            location: '',
            interest: {
                ...this.state.interests,
                interest: '',
            }
        };
        case LOGIN_FAILURE:
        return {
            ...state,
            loggingIn: false,
            error: action.payload
        };
        case FETCH_DATA_START:
            return{
                ...state,
                fetchingEvents: true
            };
        case FETCH_DATA_SUCCESS:
            return{
                ...state,
                error: '',
                errorStatusCode:null,
                fetchingEvents: false,
                events: action.payload
            };
        case FETCH_DATA_FAILURE:
            return{
                ...state,
                fetchingEvents: false,
                error: action.payload
            };
        case DELETE_START:
            return{
                ...state,
                deletingEvent: true
            };
        case DELETE_SUCCESS:
            return{
                ...state,
                deletingEvent: false,
                error: '',
                errorStatusCode: null,
                events: action.payload
            };
        case DELETE_FAILURE:
            return{
                ...state,
                deletingEvent: false, 
                error: action.payload
            }
        case USER_UNAUTHORIZED:
            return {
                ...state,
                error: action.payload.data.error,
                errorStatusCode: action.payload.status,
                fetchingEvents:false,
            };
        case ADD_EVENT_START:
            return{
                ...state,
                addingEvent: true
            };
        case ADD_EVENT_SUCCESS:
            return{
                ...state,
                addingEvent: false,
                error: '',
                errorStatusCode: null,
                events: action.payload
            };
        case ADD_EVENT_FAILURE:
            return{
                ...state,
                addingEvent:false,
                error: action.payload
            };
        case EDIT_EVENT_START:
            return{
                ...state,
                editingEvent:true
            };
        case EDIT_EVENT_SUCCESS:
            return{
                ...state,
                editingEvent:false,
                error:'',
                errorStatusCode:null,
                events: action.payload
            };
        case EDIT_EVENT_FAILURE:
            return{
                ...state,
                editingEvent:false,
                error: action.payload
            };    
        default:
        return state;
    }
}

export default reducer
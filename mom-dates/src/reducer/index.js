import {
    SIGNUP_START,
    SIGNUP_SUCCESS,
    SIGNUP_FAILURE
} from '../actions'

const initialState ={
    signingUp: false
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
            token: action.payload
        };
        case SIGNUP_FAILURE:
        return {
            ...state,
            signingUp: false,
            error: action.payload
        }
        default:
        return state;
    }
}

export default reducer
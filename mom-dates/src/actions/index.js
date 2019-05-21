import axios from 'axios';

export const SIGNUP_START = 'SIGNUP_START'
export const SIGNUP_SUCCESS = 'SIGNUP_SUCCESS'
export const SIGNUP_FAILURE = 'SIGNUP_FAILURE'

export const signup = creds => dispatch => {
    dispatch({ type: SIGNUP_START })
    return axios
    .post(`http:localhost:3000/signup`, creds)
    .then(res => {
        console.log(res)
        // localStorage.setItem('token', res.data.payload, )
        // dispatch ({ type: SIGNUP_SUCCESS })
    })
    .catch(err => {
        dispatch({ type: SIGNUP_FAILURE, payload: err.data })
    })
}
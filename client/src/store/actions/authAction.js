import axios from 'axios';
import { returnErrors } from './errorAction.js';

const USER_LOADED = 'USER_LOADED';
const USER_LOADING = 'USER_LOADING';
const AUTH_ERROR = 'AUTH_ERROR';
const LOGIN_SUCCES = 'LOGIN_SUCCES';
const LOGIN_FAIL = 'LOGIN_FAIL';
const LOGOUT_SUCCES = 'LOGOUT_SUCCES';
const REGISTER_SUCCES = 'REGISTER_SUCCES';
const REGISTER_FAIL = 'REGISTER_FAIL';

// check token and load user

export const loadUser = () => (dispatch, getState) => {
    // user loadin
    dispatch({ 
        type: USER_LOADING 
    });

    // get token from localstorage
    const token = getState().auth.token;

    // Headers
    const config= {
        headers: {
            "Content-type": "application/jason" 
        }
    }
    // If token, add to headers
    if(token) {
        config.headers['x-auth-token'] = token;
    }
    axios.get('/api/auth/user', config)
        .then(res => dispatch({
            type: USER_LOADED,
            payload: res.data
        }))
        .catch(err => {
            dispatch(returnErrors(err.response.data, err.response.status));
            dispatch({
                type: AUTH_ERROR
            });
        });
}
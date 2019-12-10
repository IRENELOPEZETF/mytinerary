import axios from 'axios';
import { returnErrors } from './errorAction.js';
import {
    USER_LOADED,
    USER_LOADING,
    AUTH_ERRORS,
    LOGIN_SUCCESS,
    LOGIN_FAIL,
    LOGOUT_SUCCESS,
    REGISTER_SUCCESS,
    REGISTER_FAIL   
} from '../actions/types';

// check token and load user
export const loadUser = () => (dispatch, getState) => {
    
    // user loading
    dispatch({ 
        type: USER_LOADING 
    });

    // get token from localStorage
    const token = getState().auth.token;

    // headers
    const config = {
        headers: {
           'Content-Type': 'application/json'
        }
    }

    // if token, add to headers
    if(token) {
        config.headers['x-auth-token'] = token;
    }
    axios.get('/', tokenConfig(getState))
        .then(res => dispatch({
            type: USER_LOADED,
            payload: res.data
            })
        )
        .catch(err => {
            dispatch(returnErrors(err.response.data, err.response.status));
            dispatch({
                type: AUTH_ERRORS
            });
        });
};

// Logout
export const logout = () => {
    return {
        type: LOGOUT_SUCCESS
    };
};

// Setup config/headers and token
export const tokenConfig = getState => {
    const token = getState().auth.token;
    const config = {
        headers: {
            'Content-type': 'application/json'
        }
    };
    if (token) {
        config.headers['x-auth-token'] = token;
    }

    return config;
};

// Register
export const register = ({ name, email, password }) => dispatch => {
    // headers
    const config = {
        headers: {
            'Content-Type': 'application/json'
        }
    }
    // request body
    const body = JSON.stringify({ name, email, password });

    axios
        .post('/register', body, config)
        .then(res => 
            dispatch({
                type: REGISTER_SUCCESS,
                payload: res.data
            })  
        )
        .catch(err => {
            dispatch(
                returnErrors(err.response.data, err.response.status, "REGISTER_FAIL"));
            dispatch({
                type: REGISTER_FAIL
            });
        });
}
// Login
export const login = ({ email, password }) => dispatch => {
    const config = { 
        headers: {
            'Content-Type': 'application/json'
        }
    };

    const body = JSON.stringify({ email, password });
    
    axios
        .post('/login', body, config)
        .then(res => 
            dispatch({
                type: LOGIN_SUCCESS,
                payload: res.data
            })
        )
        .catch(err => {
            dispatch(
                returnErrors(err.response.data, err.response.status, 'LOGIN_FAIL')
            );
            dispatch({
                type: LOGIN_FAIL
            });
        });
};
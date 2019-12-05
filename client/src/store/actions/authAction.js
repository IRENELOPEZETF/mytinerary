import axios from 'axios';
import { returnErrors } from './errorAction.js';

const USER_LOADED = 'USER_LOADED';
const USER_LOADING = 'USER_LOADING';
const AUTH_ERROR = 'AUTH_ERROR';
const LOGIN_SUCCESS = 'LOGIN_SUCCESS';
const LOGIN_FAIL = 'LOGIN_FAIL';
const LOGOUT_SUCCESS = 'LOGOUT_SUCCESS';
const REGISTER_SUCCESS = 'REGISTER_SUCCESS';
const REGISTER_FAIL = 'REGISTER_FAIL';

// check token and load user
export const loadUser = () => (dispatch, getState) => {
    
    // user loading
    dispatch({ 
        type: USER_LOADING 
    });
    
    axios
        .get('/auth/user', tokenConfig(getState))
        .then(res => 
            dispatch({
            type: USER_LOADED,
            payload: res.data
            })
        )
        .catch(err => {
            dispatch(returnErrors(err.response.data, err.response.status));
            dispatch({
                type: AUTH_ERROR
            });
        });
};
// Register
export const register = ({ name, email, password }) => dispatch => {
    
    const config = {
        headers: {
            'Content-Type': 'application/json'
        }
    }

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
            })
        })
}
// Login
export const login = ({ email, password }) => dispatch => {
    const config = { 
        headers: {
            'Content-Type': 'application/json'
        }
    }

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

// Logout
export const logout = () => {
    return {
        type: LOGOUT_SUCCESS
    };
};

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
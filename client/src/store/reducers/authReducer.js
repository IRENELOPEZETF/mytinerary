const USER_LOADED = 'USER_LOADED';
const USER_LOADING = 'USER_LOADING';
const AUTH_ERROR = 'AUTH_ERROR';
const LOGIN_SUCCES = 'LOGIN_SUCCES';
const LOGIN_FAIL = 'LOGIN_FAIL';
const LOGOUT_SUCCES = 'LOGOUT_SUCCES';
const REGISTER_SUCCES = 'REGISTER_SUCCES';
const REGISTER_FAIL = 'REGISTER_FAIL';

const initialState = {
    token: localStorage.getItem('token'),
    isAuthenticated: null,
    isLoading: false,
    user: null
};

export default function(state = initialState, action) {
    switch(action.type) {
        case USER_LOADING:
            return {
                ...state,
                isLoading: true
            };
        case USER_LOADED:
            return {
                ...state,
                isAuthenticated: true,
                isLoading: false,
                user: action.payload
            };
        case LOGIN_SUCCES:
        case REGISTER_SUCCES:
            return {
                ...state,
                ...action.payload,
                isAuthenticated: true,
                isLoading: false,
            };
        case AUTH_ERROR:
        case LOGIN_FAIL:
        case LOGOUT_SUCCES:
        case REGISTER_FAIL:
            localStorage.removeItem('token');
            return {
                ...state,
                token: null,
                user: null,
                isAuthenticated: false,
                isLoading: false
            }
        default:
            return state;
    }
}




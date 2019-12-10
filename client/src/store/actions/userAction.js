import axios from 'axios';
import { returnErrors } from './errorAction.js';

const REGISTER_SUCCESS = 'REGISTER_SUCCESS';
const REGISTER_FAIL = 'REGISTER_FAIL';

// Register
export const register = ({ name, email, password, picture}) => dispatch => {

    const config = {
        headers: {
            'Content-Type': 'application/json'
        }
    };

    const body = JSON.stringify({ name, email, password, picture });

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



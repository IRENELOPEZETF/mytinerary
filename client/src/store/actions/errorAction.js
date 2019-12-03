const GET_ERRORS = 'GET_ERRORS';
const CLEAR_ERRORS = 'CLEAR_ERRORS';

export const returnErrors = (msg, status, id = null) => {
    return {
        type: GET_ERRORS,
        payload: { msg, status, id}
    };
};
export const clearErrors = () => {
    return {
        type: CLEAR_ERRORS,
    };
};

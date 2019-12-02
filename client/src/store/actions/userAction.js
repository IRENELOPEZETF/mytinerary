export const getUser = () => dispatch => {
    fetch('/user/login')
        .then(res => res.json())
        .then(users => dispatch({
            type: "GET_USER",
        }));
    }
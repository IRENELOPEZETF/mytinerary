export const getCities = () => dispatch => {
    fetch('/cities/all')
        .then(response => response.json())
        .then(cities => dispatch({
            type: "GET_CITIES",
            payload: cities
        }));
}

// esto es una accion. get podría ser fetch
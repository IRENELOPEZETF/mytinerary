export const getItineraries = () => dispatch => {
    fetch('/itineraries/all')
        .then(response => response.json())
        .then(itineraries => dispatch({
            type: "GET_ITINERARIES",
            payload: itineraries
        }));
}

// esto es una accion. get podría ser fetch
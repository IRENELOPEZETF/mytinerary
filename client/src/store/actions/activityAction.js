export const getActivities = (itineraryId) => dispatch => {
    fetch('/activities/'+itineraryId)
        .then(response => response.json())
        .then(activities => dispatch({
            type: "GET_ACTIVITIES",
            payload: activities
        }));
}
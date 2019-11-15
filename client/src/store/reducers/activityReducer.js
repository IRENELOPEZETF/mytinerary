const initialState = {
    activities: [],
    isloaded: false
}

export default function activityReducer(state = initialState, action) {
    switch (action.type) {
        case "GET_ACTIVITIES":
            return {
                ...state,
                activities: action.payload,
                isloaded: true
            }
            default:
                return state
    }
}
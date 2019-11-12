const initialState = {
    itineraries: [],
    isloaded: false
}

export default function itineraryReducer(state = initialState, action) {
    switch (action.type) {
        case "GET_ITINERARIES":
            return {
                ...state,
                itineraries: action.payload,
                    isloaded: true
            }
            default:
                return state
    }
}

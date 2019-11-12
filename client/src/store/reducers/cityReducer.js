const initialState = {
    cities: [], 
    isloaded: false
}

export default function cityReducer(state = initialState, action) {
    switch (action.type) {
        case "GET_CITIES":
            return {
                ...state,
                cities: action.payload,
                isloaded: true
            }
        default:
            return state
    }
}


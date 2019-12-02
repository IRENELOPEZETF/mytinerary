const initialState = {
    users: [],
}

export default function userReducer(state = initialState, action) {
    switch (action.type) {
        case "GET_USER":
            return {
                ...state,
                users: action.payload,
            }
        default:
            return state
    }
}
// const REGISTER_SUCCES = 'REGISTER_SUCCES';
// const REGISTER_FAIL = 'REGISTER_FAIL';
// const GET_USER = 'GET_USER';

// const initialState = {
//     token: localStorage.getItem('token'),
//     isAuthenticated: null,
//     isLoading: false,
//     user: []
// };

// export default function (state = initialState, action) {
//     switch (action.type) {
//         case GET_USER:
//             return {
//                 ...state,
//                 users: action.payload,
//             }
    
//         case REGISTER_SUCCES:
//             localStorage.setItem('token', action.payload.token);
//             return {
//                 ...state,
//                 ...action.payload,
//                     isAuthenticated: true,
//                     isLoading: false,
//             };
//         // case AUTH_ERROR:
//         // case LOGIN_FAIL:
//         // case LOGOUT_SUCCES:
//         case REGISTER_FAIL:
//             localStorage.removeItem('token');
//             return {
//                 ...state,
//                 token: null,
//                     user: null,
//                     isAuthenticated: false,
//                     isLoading: false
//             }
//             default:
//                 return state;
//     }
// }



// const initialState = {
//     users: [],
// }

// export default function userReducer(state = initialState, action) {
//     switch (action.type) {
//         case "GET_USER":
//             return {
//                 ...state,
//                 users: action.payload,
//             }
//         default:
//             return state
//     }
// }

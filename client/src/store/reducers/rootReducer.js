import { combineReducers } from "redux";
import citiesReducer from "./cityReducer.js";
import itinerariesReducer from "./itineraryReducer.js";
import activitiesReducer from "./activityReducer.js";
import userReducer from "./userReducer.js";
import authReducer from "./authReducer.js";
import errorReducer from "./errorReducer.js";
const rootReducer = combineReducers({
    cities: citiesReducer, 
    itineraries: itinerariesReducer, 
    activities: activitiesReducer, 
    users: userReducer,
    auth: authReducer,
    error: errorReducer
}); //aquí podemos seguir añadiendo objetos, como itineraryReducer
export default rootReducer;


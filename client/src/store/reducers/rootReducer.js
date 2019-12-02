import { combineReducers } from "redux";
import citiesReducer from "./cityReducer.js";
import itinerariesReducer from "./itineraryReducer.js";
import activitiesReducer from "./activityReducer.js";
import userReducer from "./userReducer.js";
const rootReducer = combineReducers({cities: citiesReducer, itineraries: itinerariesReducer, activities: activitiesReducer, users: userReducer}); //aquí podemos seguir añadiendo objetos, como itineraryReducer
export default rootReducer;


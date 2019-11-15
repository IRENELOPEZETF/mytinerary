import { combineReducers } from "redux";
import citiesReducer from "./cityReducer.js";
import itinerariesReducer from "./itineraryReducer.js";
import activitiesReducer from "./activityReducer.js";
const rootReducer = combineReducers({cities: citiesReducer, itineraries: itinerariesReducer, activities: activitiesReducer}); //aquí podemos seguir añadiendo objetos, como itineraryReducer
export default rootReducer;


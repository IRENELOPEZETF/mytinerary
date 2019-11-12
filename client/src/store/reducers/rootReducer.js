import { combineReducers } from "redux";
import citiesReducer from "./cityReducer";
import itinerariesReducer from "./itineraryReducer";
const rootReducer = combineReducers({cities: citiesReducer, itineraries: itinerariesReducer}); //aquí podemos seguir añadiendo objetos, como itineraryReducer
export default rootReducer;


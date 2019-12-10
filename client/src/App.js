import React, { Component } from "react"; 
import store from './store.js';
import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css';
import Header from "./components/Header.js";
import Home from "./components/Home.js";
import Footer from "./components/Footer";
// import RegisterModal from "./components/auth/RegisterModal.js";
import Itineraries from "./components/Itineraries.js";
import Cities from "./components/Cities/Cities.js";
import Activities from "./components/Activities.js";
// import Login from "./components/auth/Login.js";
// import Logout from './components/auth/Logout.js';
// import User from './components/User.js';
import AppNavbar from './components/AppNavbar.js';
import { loadUser } from './store/actions/authAction.js';
import { BrowserRouter, Switch, Route } from "react-router-dom";
 
// import { Connect } from "react-redux";

class App extends Component {
  componentDidMount () {
    store.dispatch(loadUser());
  }
  render(){
  return (
  
      <BrowserRouter>
        < div className = "App" >
          {/* <Header/> */}
          <AppNavbar/>
          <Switch>
            <Route exact path = "/" component = { Home }/>
            <Route path = "/Register" component = { AppNavbar }/>
            <Route path = "/Login" component = { AppNavbar }/>
            <Route path = "/Logout" component = { AppNavbar }/>
            <Route path = "/Cities" component = { Cities }/>
            <Route path = "/Itineraries/:cityId" component = { Itineraries }/>
            <Route path = "/Activities/:itineraryId" component = { Activities }/>
          </Switch>
            <Footer/>
        </div>
        
      </BrowserRouter>
    
  );
  }
}
 
export default App;


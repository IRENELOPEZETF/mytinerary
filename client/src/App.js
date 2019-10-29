import React from "react";
import './App.css';
import Header from "./components/Header.js";
import Home from "./components/Home.js";
import Footer from "./components/Footer";
import Users from "./components/Users.js";
import Cities from "./components/Cities.js";
import { BrowserRouter, Switch, Route } from "react-router-dom";
 
// import { Connect } from "react-redux";

function App() {
  
  return (
  
      <BrowserRouter>
        < div className = "App" >
          <Header/>
          <Switch>
            <Route exact path = "/" component = { Home }/>
            <Route path = "/Users" component = { Users }/>
            <Route path = "/Cities" component = { Cities }/>
          </Switch>
            < Footer/>
        </div>
        
      </BrowserRouter>
    
  );
}
 
export default App;


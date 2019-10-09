import React from "react";
import './App.css';
import Header from "./components/Header.js";
import Home from "./components/Home.js";
import Footer from "./components/Footer";
import Users from "./components/Users.js";
import Cities from "./components/Cities.js";
import { BrowserRouter, Switch, Route } from "react-router-dom";
 
// import { connect } from "react-redux";
// browserrouter es para poder ir de página a página
import '../../server/node_modules/bootstrap/dist/css/bootstrap.min.css';

// import home from './components/home';
// import footer from './components/footer';

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


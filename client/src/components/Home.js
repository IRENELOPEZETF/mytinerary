import React, { Component } from "react";
import tineraryLog from "../img/MYtineraryLogo.png";
import circledRight from "../img/circled-right-2.png";
import bcn from "../img/bcn.jpg";
import ams from "../img/ams.jpg";
import ny from "../img/ny.jpg";
import par from "../img/par.jpeg";
import "../App.css";
import "../index.css";
import '../../../server/node_modules/bootstrap/dist/css/bootstrap.min.css';
import { NavLink } from "react-router-dom";


class Home extends Component {
    render() {
        return (
            <div className='myhome'>
                
                <img src = { tineraryLog } alt = "MyTineraryLogo" className = "logo" height = "160px"/>
                
                <h5>Find your perfect trip, designed by insiders who know and love their cities.</h5> 
    
                <NavLink className = "arrow-menu" to = { "/cities" }><img src = { circledRight } alt = "circled-right" className = "circled-right" height = "80px"/></NavLink>
    
                <h3>Popular MYtineraries</h3> 
                
                <div className='popCities'>
                   
                            <img src ={ bcn } alt = "Barcelona" className = "block-example border border-danger" height = "130px" roundedCircle/>
                           
                            <img src = { ny } alt = "New York" className = "block-example border border-danger" height = "130px" roundedCircle/>
                            
                            <img src = { ams } alt = "Amsterdam" className = "block-example border border-danger" height = "130px" roundedCircled />
                           
                            <img src = { par } alt = "Paris" className = "block-example border border-danger" height = "130px"/>
                            
                </div>  
            </div>
        );
    }
}



export default Home;
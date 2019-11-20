import React, { Component } from "react";
import tineraryLog from "../img/MYtineraryLogo.png";
import circledRight from "../img/circled-right-2.png";
import bcn from "../img/bcn.jpg";
import ams from "../img/ams.jpg";
import ny from "../img/ny.jpg";
import par from "../img/par.jpeg";
import "../App.css";
import "../index.css";
// import '../../../server/node_modules/bootstrap/dist/css/bootstrap.min.css';
import { NavLink } from "react-router-dom";


class Home extends Component {
    render() {
        return (
            <div className='myHome'>

                <div className='myLogo'>
                <img src = { tineraryLog } alt = "MyTineraryLogo" className = "logo" height = "140px"/>
                </div>

                <div className='myTrip'>
                <h5>Find your perfect trip, designed by insiders who know and love their cities.</h5> 
                </div>

                <NavLink className = "arrow-menu" to = { "/cities" }><img src = { circledRight } alt = "circled-right" className = "circled-right" height = "80px"/></NavLink>

                {/* <div className='popCities'> */}
                <h3>Popular MYtineraries</h3> 
                {/* </div> */}
                <div className='cityImg'>
                    <div className='leftImg'>
                        <div className='cityPhoto'>
                            <NavLink className = "cityPhoto1" to = { "/itineraries/5db0aac61c9d44000055b37e" }><img src ={ bcn } alt = "Barcelona" className = "cityPhoto" height = "110px" /></NavLink>
                        </div>
                        <div className = 'cityPhoto'>
                            <NavLink className = "cityPhoto2" to = { "/itineraries/5db0ab351c9d44000055b382" }><img src = { ny } alt = "New York" className = "cityPhoto" height = "110px" /></NavLink>
                        </div>
                    </div>
                    <div className = 'rightImg'>
                        <div className='cityPhoto'>
                            <NavLink className = "cityPhoto3" to = { "/itineraries/5db0ab071c9d44000055b380" }>
                            <img src = { ams } alt = "Amsterdam" className = "cityPhoto" height = "110px" /></NavLink>
                        </div>
                        <div className = 'cityPhoto'>
                            <NavLink className = "cityPhoto4" to = { "/itineraries/5db0ab691c9d44000055b384" }><img src = { par } alt = "Paris" className = "cityPhoto" height = "110px"/></NavLink>
                        </div>   
                    </div>    
                </div>  
            </div>
        );
    }
}



export default Home;
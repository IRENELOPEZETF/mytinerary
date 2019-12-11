import React, { Component } from "react";
import houseicon from "../img/homeIcon.png";
import cityIcon from "../img/cityIcon.png";
import "../App.css";
import "../index.css";
import { NavLink } from "react-router-dom";
// import '../../../server/node_modules/bootstrap/dist/css/bootstrap.min.css';


class Footer extends Component {
    render() {
        return (
            <div className='appFooter'>
                <footer>
                    <NavLink className = "home-icon" to = { "/" }>
                        <img src = { houseicon } alt = "homeIcon" className = "house" height = "50px"/>
                    </NavLink>
                    <NavLink className = "citiesIcon" to = {"/cities"}>
                        <img src = { cityIcon } alt = "" className = "cityIcon" height = "50px"/>
                    </NavLink>
                </footer>
            </div>
        );
    }
}

// const footerStyle = {
//    margin-bottom: "0px",
// }


export default Footer;
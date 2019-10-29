import React, { Component } from "react";
import houseicon from "../img/homeIcon.png";
import "../App.css";
import "../index.css";
import { NavLink } from "react-router-dom";
// import '../../../server/node_modules/bootstrap/dist/css/bootstrap.min.css';


class Footer extends Component {
    render() {
        return (
            <div className='appFooter'>
                <footer>
                    <NavLink className = "home-icon" to = { "/" }><img src = { houseicon } alt = "homeIcon" className = "house" height = "40px"/></NavLink>
                </footer>
            </div>
        );
    }
}

// const footerStyle = {
//    margin-bottom: "0px",
// }


export default Footer;
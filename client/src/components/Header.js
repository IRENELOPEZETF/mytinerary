import React, { Component } from "react";
import "../App.css";
import "../index.css";

import userDoll from "../img/user.png" 
import Users from "../components/Users.js";
import Home from "../components/Home.js";
import { Collapse, Navbar, NavbarToggler, NavbarBrand, Nav, NavItem } from 'reactstrap';
import { NavLink } from "react-router-dom";
// import { connect } from 'react-redux';


class Header extends Component {

  constructor(props) {
    super(props);

    this.toggleNavbar = this.toggleNavbar.bind(this);
    this.state = {
      collapsed: true
    };
  }

  toggleNavbar() {
    this.setState({
      collapsed: !this.state.collapsed
    });
  }
 
    render() {
        return (
            <div className = "header">
              <div className= "user-menu">
                <img src = { userDoll } alt = "doll" className = "user-doll" height = "45px"/>
              </div>
            
              <div classe = "burger-menu">
                <Navbar color="faded" light>
                < NavLink to = {"/"} className = "mr-right" > </NavLink>
                <NavbarToggler onClick={this.toggleNavbar} className="mr-2" />
                <Collapse isOpen={!this.state.collapsed} navbar>
                    <Nav navbar>
                    <NavItem>
                        <NavLink to={"/"}>Home</NavLink>
                        <NavLink to={"/Users"}>Users</NavLink>
                    </NavItem>
                    </Nav>
                </Collapse>
                </Navbar>
              </div>
            </div>
        );
    }
}

//                 <nav>
//                     <ul>
//                     <li><a href="/">Home</a></li>
//                     <li><a href="/Users">User</a></li>
//                     </ul>
//                 </nav>
//                 {/* para poder ir a una página u otra */}
//                 

//         </div>
//  );
//  }
//  }

export default Header;



import React, { Component } from "react";
import "../App.css";
import "../index.css";
import '../../../server/node_modules/bootstrap/dist/css/bootstrap.min.css';
import userDoll from "../img/user.png" 
import Users from "../components/Users.js";
import Home from "../components/Home.js";
import { Collapse, Navbar, NavbarToggler, NavbarBrand, Nav, NavItem, NavLink } from 'reactstrap';
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
              <div class = "user-menu">
                <img src = { userDoll } alt = "doll" className = "user-doll" height = "45px"/>
              </div>
            
              <div classe = "burger-menu">
                <Navbar color="faded" light>
                <NavbarBrand href="/" className="mr-right"></NavbarBrand>
                <NavbarToggler onClick={this.toggleNavbar} className="mr-2" />
                <Collapse isOpen={!this.state.collapsed} navbar>
                    <Nav navbar>
                    <NavItem>
                        <NavLink href="/" component = { Home }>Home</NavLink>
                        <NavLink href="/Users" component = { Users }>Users</NavLink>
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



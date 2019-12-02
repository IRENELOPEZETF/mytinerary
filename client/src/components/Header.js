import React, { Component } from "react";
import "../App.css";
import "../index.css";
import Avatar from 'react-avatar';
import userDoll from "../img/user.png";
import hamburguesa from "../img/burger-menu.png";
import { slide as Menu } from 'react-burger-menu'; 
// import Users from "../components/Users.js";
// import Home from "../components/Home.js";
import { Collapse, Navbar, NavbarToggler, Nav, NavItem } from 'reactstrap';
import { NavLink } from "react-router-dom";
// import { connect } from 'react-redux';


var styles = {
  bmBurgerButton: {
    position: 'right',
    width: '36px',
    height: '30px',
    left: '36px',
    top: '36px'
  },
  // bmBurgerBars: {
  //   background: 'none'
  // },
  // bmBurgerBarsHover: {
  //   background: '#a90000'
  // },
  // bmCrossButton: {
  //   height: '24px',
  //   width: '24px'
  // },
  // bmCross: {
  //   background: '#bdc3c7'
  // },
  // bmMenuWrap: {
  //   position: 'fixed',
  //   height: '50%'
  // },
  // bmMenu: {
  //   background: '#373a47',
  //   padding: '2.5em 1.5em 0',
  //   fontSize: '1.15em'
  // },
  // bmMorphShape: {
  //   fill: '#373a47'
  // },
  // bmItemList: {
  //   color: '#b8b7ad',
  //   padding: '0.8em'
  // },
  // bmItem: {
  //   display: 'inline-block'
  // },
  // bmOverlay: {
  //   background: 'rgba(0, 0, 0.5, 0)'
  // }
}
 


class Header extends Component {

  // constructor(props) {
  //   super(props);

  //   this.toggleNavbar = this.toggleNavbar.bind(this);
  //   this.state = {
  //     collapsed: true
  //   };
  // }

  // toggleNavbar() {
  //   this.setState({
  //     collapsed: !this.state.collapsed
  //   });
  // }
  // showSettings(event) {
  //      event.preventDefault();
  // }
    render() {
        return (
            <div className = "header">
              <div className= "user-menu">
                <Navbar>
                  <Avatar googleId="118096717852922241760" size="45" round={true} src = { userDoll } alt = "doll"/>
                </Navbar>
                <img />
              </div>
              <div>
              <div className = "burger-menu">
                <Navbar className="menuBurger">
                  <img className="hamburguesa" src={ hamburguesa } alt = "burger" height="45px"/>
                </Navbar>
              </div>  
                <Menu burgerButtonClassName={ "bm-burger-button" }/>
                <Menu className="menuClass">
                <a id="cities" className="menu-item" href = {"/cities"}>Cities</a>
                <a id="logIn" className="menu-item" href = {"/loggin"}>Log in</a>
                <a id="logOut" className="menu-item" href = {"/loggout"}>Log out</a>
                <a id="register" className="menu-item" href = {"/user"}>Create New Account</a>
                </Menu>
                
              </div>
            
              {/* <div classe = "burger-menu">
                <Navbar src={burgerMenu} right width="45px">
                <NavLink to = {"/"} className = "nonono" > </NavLink>
                <NavbarToggler onClick={this.toggleNavbar}/>
                <Collapse isOpen={!this.state.collapsed} navbar>
                    <Nav className="burgerMenu" src={burgerMenu} >
                    <NavItem>
                        <NavLink to={"/"}>Home</NavLink>
                        <NavLink to={"/Users"}>Users</NavLink>
                    </NavItem>
                    </Nav>
                </Collapse>
                </Navbar>
              </div> */}
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



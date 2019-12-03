import React, { Component } from "react";
import "../App.css";
import "../index.css";
import Avatar from 'react-avatar';
import userDoll from "../img/user.png";
import hamburguesa from "../img/burger-menu.png";
import { slide as Menu } from 'react-burger-menu'; 
import RegisterModal from "../components/auth/RegisterModal.js";
import { Navbar } from 'reactstrap';

// import { connect } from 'react-redux';


var styles = {
  bmBurgerButton: {
    position: 'right',
    width: '36px',
    height: '30px',
    left: '36px',
    top: '36px'
  },
 
}

class Header extends Component {

  
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
                <a id="register" className="menu-item" href = {"/registerModal"}>
                  Create an Account
                  <RegisterModal/>
                </a>
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



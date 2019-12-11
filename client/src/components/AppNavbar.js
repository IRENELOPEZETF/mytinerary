import React, { Component, Fragment } from 'react';
import { Collapse, Navbar, NavbarToggler, NavbarBrand, Nav, NavItem, Container} from 'reactstrap';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import RegisterModal from './auth/RegisterModal.js';
import LoginModal from './auth/Login.js';
import Logout from './auth/Logout.js';
import 'bootstrap/dist/css/bootstrap.min.css';
import Avatar from 'react-avatar';
import userDoll from "../img/user.png";
import hamburguesa from "../img/hamburguesa.png";

class AppNavbar extends Component {
  state = {
    isOpen: false
  };

  static propTypes = {
    auth: PropTypes.object.isRequired
  };

  toggle = () => {
    this.setState({
      isOpen: !this.state.isOpen
    });
  };

  render() {
    const { isAuthenticated, user } = this.props.auth;
    const authLinks = (
      <Fragment>
        <NavItem>
          <span className='navbar-text mr-3'>
            <strong>{user ? `Welcome ${user.name}` : ''}</strong>
          </span>
        </NavItem>
        <NavItem>
          <Logout/>
        </NavItem>
      </Fragment> 
    );

    const guestLinks = (
      <Fragment>
        <NavItem>
          <RegisterModal/>
        </NavItem>
        <NavItem>
          <LoginModal/>
        </NavItem>
      </Fragment>
    );

    return (
      <div className="headerNavbar">
        <Navbar dark expand='sm' className='mb-5'>
          <Container>
            <NavbarBrand href='#'>
              <Avatar googleId="118096717852922241760" size="45" round={true} src = { userDoll } alt = "user"/>
            </NavbarBrand>
            <NavbarToggler onClick={this.toggle} className="navBar" src = { hamburguesa }/>
            <Collapse isOpen={this.state.isOpen} navbar>
              <Nav className='ml-auto' navbar>              
                {isAuthenticated ? authLinks : guestLinks}
              </Nav>
            </Collapse>
          </Container>
        </Navbar>
      </div>
    );
  }
}

const mapStateToProps = state => ({
  auth: state.auth
});

export default connect(
  mapStateToProps,
  null
)(AppNavbar);
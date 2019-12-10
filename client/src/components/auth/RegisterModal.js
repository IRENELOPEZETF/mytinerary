import React, { Component } from "react";
import "../../App.css";
import "../../index.css";
import PropTypes from 'prop-types';
import { connect } from "react-redux";
import { register } from "../../store/actions/authAction.js";
import { clearErrors } from "../../store/actions/errorAction.js";
import { Button, NavLink, Modal, ModalHeader, ModalBody, Form, FormGroup, Label, Input, Alert } from 'reactstrap';

class RegisterModal extends Component {
    state = {
        modal: false,
        name: '',
        email: '',
        password: '',
        picture: '',
        msg: null
    };

    static propTypes = {
        isAuthenticated: PropTypes.bool,
        error: PropTypes.object.isRequired,
        register: PropTypes.func.isRequired,
        clearErrors: PropTypes.func.isRequired
    };

    componentDidUpdate(prevProps) {
        const { error, isAuthenticated } =  this.props;
        if(error !== prevProps.error) {
          // check the error
            if(error.id === 'REGISTER_FAIL') {
                this.setState({ msg: error.msg.msg });
            } else {
                this.setState({ msg: null })
            }
        }
        // if authenticated
        if(this.state.modal) {
            if(isAuthenticated) {
                this.toggle();
            }
        }
    }

    toggle = () => {
      // clear errors
        this.props.clearErrors();
        this.setState({
            modal: !this.state.modal
        });
    };

    onChange = e => {
        this.setState({ [e.target.name]: e.target.value });
    };

    onSubmit = e => {
        e.preventDefault();

        const { name, email, password, picture } =  this.state;

        // create a user object
        const newUser = {
            name, 
            email,
            password,
            picture
            
        };
        this.props.register(newUser);
       console.log(this.state.name);
    };

    render() {
        return (
          
          <div className="registrationForm">
                
            <NavLink onClick={this.toggle} href='#'>
            Create new account
            </NavLink>

            <Modal isOpen={this.state.modal} toggle={this.toggle}>

              <ModalHeader toggle={this.toggle}>Register</ModalHeader>

              <ModalBody isOpen={this.state.modal} toggle={this.toggle}>
                {this.state.msg ? (
                  <Alert className="danger" color='danger'>{this.state.msg}</Alert>
                ) : null}

                <Form onSubmit={this.onSubmit}>
                  <FormGroup>

                    <Label for='name'></Label>
                      <Input
                        type='text'
                        name='name'
                        id='name'
                        placeholder='Name'
                        className='mb-3'
                        onChange={this.onChange}/>

                    <Label for='email'></Label>
                      <Input
                        type='email'
                        name='email'
                        id='email'
                        placeholder='Email'
                        className='mb-3'
                        onChange={this.onChange}/>

                    <Label for='password'></Label>
                      <Input
                        type='password'
                        name='password'
                        id='password'
                        placeholder='Password'
                        className='mb-3'
                        onChange={this.onChange}/>

                    <Button color='dark' style={{ marginTop: '2rem' }} block>
                    Register
                    </Button>

                  </FormGroup>
                </Form>
            
              </ModalBody>
            </Modal>
        
          </div>
            
        )
    }
}
   
    const mapStateToProps = state => ({
        isAuthenticated: state.auth.isAuthenticated,
        error: state.error
    });
    // if (
    //   isAuthenticated = state.auth.isAuthenticated ) 
export default connect(mapStateToProps, { register, clearErrors })(RegisterModal);

import React, { Component } from "react";
import "../../App.css";
import "../../index.css";
import PropTypes from 'prop-types';
import { connect } from "react-redux";


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
        error: PropTypes.object.isRequired
    };

    constructor(props) {
        super(props);
        this.state = {
            value: ''
        };

        this.handleChange = this.handleChange.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);
    }

    handleChange(event) {
        this.setState({
            value: event.target.value
        });
    }

    handleSubmit(event) {
        alert('A name was submitted: ' + this.state.value);
        event.preventDefault();
    }

    render() {
        return (
        <form onSubmit={this.handleSubmit}>
            <label for='name'>
                Name
            <input type="text" id="name" value={this.state.value} onChange={this.handleChange} />
            </label>
            <label for='email'>
                email
            <input type="email" id="email" value={this.state.value} onChange={this.handleChange} />
            </label>
            <label for='password'>
                Password
            <input type="password" id="password" value={this.state.value} onChange={this.handleChange} />
            </label>
            <button class="registerButton">
                Register
            <input type="submit" value="Submit" />
            </button>
        </form>
        );
    }
}
   
    const mapStateToProps = state => ({
        isAuthenticated: state.auth.isAuthenticated,
        error: state.error
    });

export default connect(mapStateToProps, {})(RegisterModal);
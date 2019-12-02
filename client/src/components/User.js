import React, { Component } from "react";
import "../App.css";
import "../index.css"
import { connect } from "react-redux";
import { getUser } from "../store/actions/userAction.js";

class User extends Component {


    render() {
        return (
            <div className="createAccount">
                <h1>Create new account</h1>
                <form>name</form>
                <form>e-mail</form>
                <form>password</form>
                <form>profile picture</form>

            </div>
        )
    }
}

export default User;
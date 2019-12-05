import React, { Component } from "react";
import "../App.css";
import "../index.css"
import { connect } from "react-redux";
import { getUser } from "../store/actions/userAction.js";
import RegisterModal from "./auth/RegisterModal";

class User extends Component {


    render() {
        return (
            <div className="createAccount">
                <a>Create new account</a>
                <RegisterModal/>

            </div>
        )
    }
}

export default User;
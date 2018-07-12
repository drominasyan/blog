import React, { Component } from 'react';
import { Redirect } from "react-router-dom";
import 'bootstrap/dist/css/bootstrap.min.css';

class Login extends Component {
    constructor (props) {
        super(props);
        this.state = {
            loggedIn: false
        };
        this.login = this.login.bind(this);
    }

    login() {
        let username = this.refs.username.value,
            password = this.refs.password.value;
        if (username.length && password.length) {
            let users = JSON.parse(localStorage.getItem("users")) || {},
                doesUserExist = false;
            for(let key in users) {
                if (users[key].username === username && users[key].password === password) {
                    doesUserExist = true;
                    localStorage.setItem("activeUserId", users[key].id);
                }
            }
            if (!doesUserExist) {
                let newUser = {
                    id: Object.keys(users).length,
                    username: username,
                    password: password,
                };
                users[newUser["id"]] = newUser;
                localStorage.setItem("users", JSON.stringify(users));
                localStorage.setItem("activeUserId", newUser.id);
            }
            this.setState({loggedIn: true});
        }
    }

    render() {
        if (this.state.loggedIn) {
            return (
                <Redirect to="blogs" />
            )
        }
        return (
            // <div className="App">
            <div class="container">
                <input type="text" ref="username"/>
                <input type="password" ref="password"/>
                <button onClick={this.login}>Login</button>
            </div>
            // </div>
        );
    }
}

export default Login;

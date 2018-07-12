import React, { Component } from 'react';
import {Link, Redirect} from "react-router-dom";
import Blog from "./Blog";

class Blogs extends Component {
    constructor (props) {
        super(props);
        this.state = {
            blogs: JSON.parse(localStorage.getItem("blogs")) || {}
        };
        this.login = this.login.bind(this);
    }

    login() {
        if (this.refs.username.value.length && this.refs.password.value.length) {
            this.setState({loggedIn: true});
        }
    }

    render() {
        return (
            <div className="App">
                <h3>Blog</h3><button><Link to="/create-blog">Create</Link></button>
                <br/>
                {
                    Object.keys(this.state.blogs).length
                        ? Object.keys(this.state.blogs).map((blog, index) => <Blog key={index} blog={this.state.blogs[blog]}/>)
                        : <h1>There is no post</h1>
                }
            </div>
        );
    }
}

export default Blogs;

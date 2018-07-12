import React, { Component } from 'react';
import {Link, Redirect} from "react-router-dom";

class Blog extends Component {
    constructor (props) {
        super(props);
    }

    render() {
        return (
            <div className="App">
                <img src="" alt="post-img"/>
                <br/>
                <div><p>Title: </p><Link to={`/edit-blog/${this.props.blog.id}`}>{this.props.blog.title}</Link></div>
                <p>Description: {this.props.blog.description}</p>
            </div>
        );
    }
}

export default Blog;

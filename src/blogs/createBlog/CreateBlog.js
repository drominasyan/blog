import React, { Component } from 'react';
import {Link, Redirect} from "react-router-dom";

class CreateBlog extends Component {
    constructor (props) {
        super(props);
        this.createBlog = this.createBlog.bind(this);
    }

    createBlog() {
        let title = this.refs.title.value,
            description = this.refs.description.value;
        if (title.length && description.length) {
            let blogs = JSON.parse(localStorage.getItem("blogs")) || {},
                newBlog = {
                    id: Object.keys(blogs).length,
                    authorId: parseInt(localStorage.getItem("activeUserId")),
                    title: title,
                    description: description,
                    comment: ""
                };
            blogs[newBlog["id"]] = newBlog;
            localStorage.setItem("blogs", JSON.stringify(blogs));
            this.props.history.push("/blogs");
        }
    }

    render() {
        return (
            <div className="App">
                <h3>Create Blog</h3>
                <input type="text" placeholder="Enter Title" ref="title"/>
                <input type="text" placeholder="Enter Description" ref="description"/>
                <button onClick={this.createBlog}>Create Blog</button>
            </div>
        );
    }
}

export default CreateBlog;

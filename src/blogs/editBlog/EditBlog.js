import React, { Component } from 'react';
import {Link, Redirect} from "react-router-dom";

class EditBlog extends Component {
    constructor (props) {
        super(props);
        this.state = {
            author: JSON.parse(localStorage.getItem("users"))[parseInt(localStorage.getItem("activeUserId"))],
            selectedBlog: JSON.parse(localStorage.getItem("blogs"))[this.props.match.params.blogId]
        };
        this.changeValue = this.changeValue.bind(this);
        this.save = this.save.bind(this);
    }

    save () {
        let selectedBlog = this.state.selectedBlog,
            blogs = JSON.parse(localStorage.getItem("blogs"));
        blogs[selectedBlog.id] = selectedBlog;
        localStorage.setItem("blogs", JSON.stringify(blogs));
        this.props.history.push("/blogs")
    }

    changeValue(key) {
        return () => {
            if (this.refs[key]) {
                let selectedBlog = this.state.selectedBlog;
                selectedBlog[key] = this.refs[key].value;
                this.setState({selectedBlog});
            }
        }
    }

    render() {
        return (
            <div className="App">
                <h3>Blog</h3>
                <p>Author: </p><input type="text" readOnly value={this.state.author.username} />
                <p>Title: </p><input type="text" ref="title" readOnly={this.state.author.id !== this.state.selectedBlog.authorId} onChange={this.changeValue("title")} value={this.state.selectedBlog.title} />
                <p>Body: </p><input type="text" ref="description" readOnly={this.state.author.id !== this.state.selectedBlog.authorId} onChange={this.changeValue("description")} value={this.state.selectedBlog.description} />
                <p>Comment: </p><input type="text" ref="comment" onChange={this.changeValue("comment")} value={this.state.selectedBlog.comment} />
                <button onClick={this.save}>Save</button>
            </div>
        );
    }
}

export default EditBlog;

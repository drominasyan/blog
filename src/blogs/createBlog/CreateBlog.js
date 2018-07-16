import React, { Component } from 'react';
import { ListGroup, Col, ListGroupItem, Button} from 'react-bootstrap';

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
                    authorName: JSON.parse(localStorage.getItem("users"))[parseInt(localStorage.getItem("activeUserId"))]["username"],
                    title: title,
                    description: description,
                    comment: ""
                };
            blogs[newBlog["id"]] = newBlog;
            console.log(newBlog);
            localStorage.setItem("blogs", JSON.stringify(blogs));
            this.props.history.push("/blogs");
        }
    }

    render() {
        return (
            <Col xs={12} md={4}>
                <h3>Create Blog</h3>
                <input type="text" class="form-control mb-2" placeholder="Enter Title" ref="title"/>
                <textarea class="form-control mb-2" placeholder="Enter Description" ref="description"></textarea>
                <Button bsStyle="primary" onClick={this.createBlog}>Create Blog</Button>
            </Col>
        );
    }
}

export default CreateBlog;

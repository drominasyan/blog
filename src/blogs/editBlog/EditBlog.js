import React, { Component } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import { ListGroup, Col, ListGroupItem, Button} from 'react-bootstrap';
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
                    <Col xs={12} md={4}>
                        <div className="blog-list">
                    <ListGroup>
                        <ListGroupItem bsStyle="success">Author: {this.state.selectedBlog.authorName}</ListGroupItem>
                        <ListGroupItem bsStyle="info">
                            <p>Title: </p>
                            <input type="text" class="form-control" ref="title" readOnly={this.state.author.id !== this.state.selectedBlog.authorId} onChange={this.changeValue("title")} value={this.state.selectedBlog.title} />
                        </ListGroupItem>
                        <ListGroupItem bsStyle="warning">
                            <p>Body: </p>
                            <textarea class="form-control" ref="description" readOnly={this.state.author.id !== this.state.selectedBlog.authorId} onChange={this.changeValue("description")} value={this.state.selectedBlog.description}></textarea>
                        </ListGroupItem>
                        <ListGroupItem bsStyle="danger">
                            <p>Comment: </p>
                            <textarea class="form-control" ref="comment" onChange={this.changeValue("comment")} value={this.state.selectedBlog.comment}></textarea>
                        </ListGroupItem>
                    </ListGroup>
                    <Button  onClick={this.save} className="mt-2">Save</Button>
                </div>
            </Col>
            </div>
        );
    }
}

export default EditBlog;

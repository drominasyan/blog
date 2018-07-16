import React, { Component } from 'react';
import img from '../react.png';
import {Link, Redirect} from "react-router-dom";
import 'bootstrap/dist/css/bootstrap.min.css';
import { ListGroup, Col, ListGroupItem} from 'react-bootstrap';

class Blog extends Component {
    constructor (props) {
        super(props);
    }

    render() {
        return (
            <Col xs={12} md={4}>
                <div className="blog-list">
                    <ListGroup>
                        <ListGroupItem>
                            <img src={img} width="100px" alt="post-img"/>
                        </ListGroupItem>
                        <ListGroupItem active href={`/edit-blog/${this.props.blog.id}`}>
                            <span className="headerr">Title:</span>
                            {this.props.blog.title}
                        </ListGroupItem>
                        <ListGroupItem disabled >
                            <span className="headerr">Description</span>
                            {this.props.blog.description}
                        </ListGroupItem>
                    </ListGroup>
                </div>
            </Col>
        );
    }
}

export default Blog;

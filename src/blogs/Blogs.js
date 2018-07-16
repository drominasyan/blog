import React, { Component } from 'react';
import {Link, Redirect} from "react-router-dom";
import Blog from "./Blog";
import 'bootstrap/dist/css/bootstrap.min.css';
import {Jumbotron, Row, Button, Grid} from 'react-bootstrap';

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
            <div>
                <Grid>
                    <Jumbotron>
                        <div className="header">
                            <h1 className="float-left">Blog</h1>
                            <p className="float-right">
                                <Button bsStyle="primary" className="text-center">
                                    <Link className="creat" to="/create-blog">Create</Link>
                                </Button>
                            </p>
                        </div>
                    </Jumbotron>
                    <Row className="show-grid my-list">
                            {
                                Object.keys(this.state.blogs).length
                                    ? Object.keys(this.state.blogs).map((blog, index) => <Blog key={index} blog={this.state.blogs[blog]}/>)
                                    : <h1>There is no post</h1>
                            }
                    </Row>
                </Grid>
            </div>
        );
    }
}

export default Blogs;

import React, { Component } from 'react';
import { Switch, Route } from 'react-router';
import Login from "../login/Login";
import Blogs from "../blogs/Blogs";
import EditBlog from "../blogs/editBlog/EditBlog";
import CreateBlog from "../blogs/createBlog/CreateBlog";

class Router extends Component {
    render() {
        return (
            <Switch>
                <Route exact path="/" component={Login}/>
                <Route path="/blogs" component={Blogs}/>
                <Route path="/edit-blog/:blogId" component={EditBlog}/>
                <Route path="/create-blog" component={CreateBlog}/>
            </Switch>
        );
    }
}

export default Router;

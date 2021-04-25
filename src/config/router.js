import React, { Component } from 'react';
import { BrowserRouter as Router, Route } from 'react-router-dom';
import AddPost from '../components/AddPost.jsx';
import Home from '../components/Home.jsx'
import Attributes from '../components/Attributes.jsx'
import Post from '../components/Post.jsx'

class Approuter extends Component {
    render() {
        return (
            <Router>
                <Route exact path='/' component={Home} />
                <Route exact path='/addpost' component={AddPost} />
                <Route exact path='/addpost/attributes' component={Attributes} />
                <Route exact path='/post/:id' component={Post} />
            </Router>
        )
    }
}
export default Approuter;
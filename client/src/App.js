import React, { Component } from 'react';

import { Route, Link, Switch } from 'react-router-dom';

import PostsIndex from './components/Posts_List';
import PostsNew from './components/Posts_New';
import Post from './components/Post';

class App extends Component {
  render() {
    return (
      <div>
        <Switch>
          <Route exact path="/posts/new" component={PostsNew} />
          <Route exact path="/posts" component={PostsIndex} />
          <Route path="/posts/:id" component={Post} />
        </Switch>
      </div>
    );
  }
}

export default App;

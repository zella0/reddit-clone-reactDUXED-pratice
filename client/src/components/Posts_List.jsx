import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Route, Link, Switch } from 'react-router-dom';

import { ListGroup, ListGroupItem } from 'reactstrap';
import PostsVotes from './Posts_Votes';

import { fetchPosts } from '../redux/actions/postsActions';
// import { fetchCommentsCount } from '../redux/actions/commentsActions';

class PostsIndex extends Component {
  componentDidMount() {
    this.props.fetchPosts();
  }

  renderPosts = () => {
    let postStyle = {
      display: 'flex',
      alignItems: 'center'
    }
    let commentsAmountStyle = {
      display: 'flex',
      flexDirection: 'column',
      transform: 'translateY(10px)',
      textDecoration: 'none'
    }
    return this.props.posts.map((post) => {
      return (
        <ListGroupItem key={post.id} style={postStyle}>
          <PostsVotes
            id={post.id}
            upvotes={post.upvotes}
          />
          <Link to={`/posts/${post.id}`} style={{ textDecoration: 'none' }}>
            <div style={commentsAmountStyle}>
              <span style={{ fontSize: '1.5rem' }}>
                {post.title}
              </span>
              <span style={{color: 'grey'}}>
                {post.comments_count} comments
              </span>
            </div>
          </Link>
        </ListGroupItem>
      );
    })
  }

  render() {
    return (
      this.props.posts.length &&
      <React.Fragment>
        <div className="container">
          <span>
            <h1>Posts</h1>
            <Link className="btn btn-primary" to='/posts/new'>Add A Post</Link>
          </span>
          <ListGroup>
            {this.renderPosts()}
          </ListGroup>
        </div>
      </React.Fragment>
      )
  }
}



const mapStateToProps = (state) => ({
  posts: state.posts
})


const mapDispatchToProps = {
  fetchPosts,
  // fetchCommentsCount
}

export default connect(mapStateToProps, mapDispatchToProps)(PostsIndex);
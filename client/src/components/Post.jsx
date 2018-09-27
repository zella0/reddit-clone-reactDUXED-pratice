import React, { Component } from 'react';
import { connect } from 'react-redux';

import { Container } from 'reactstrap';
import PostsVotes from './Posts_Votes';
import CommentsList from './Comments_List';

import { fetchPost } from '../redux/actions/postsActions';

class Post extends Component {
  componentDidMount() {
    this.props.fetchPost(this.props.match.params.id);
  }

  render() {
    // console.log(this.props.post[0]);
    
    return (
      this.props.post.length &&
      <React.Fragment>
        <Container fluid
          style={{
            display: 'flex',
            alignItems: 'center',
            minHeight: '5rem',
            backgroundColor: 'black',
            color: 'white'
          }}>
          <span style={{ display: 'flex', alignItems: 'center' }}>
            <PostsVotes
              id={this.props.post[0].id}
              upvotes={this.props.post[0].upvotes}
            />
            <span style={{ color: 'white' }}>
              <h1 className="display-5">{this.props.post[0].title}</h1>
              <span style={{ color: 'grey' }}>{this.props.post[0].comments_amount} comments</span>
            </span>
          </span>
        </Container>
        <Container fluid
          style={{
            display: 'flex',
            alignItems: 'center',
            minHeight: '5rem',
            backgroundColor: 'grey',
            color: 'white'
          }}>
          <p className="display-5">{this.props.post[0].content}</p>
        </Container>
        <Container fluid>
          <CommentsList
            id={this.props.post[0].id}
          />
        </Container>
      </React.Fragment>
    );
  }
}

const mapStateToProps = (state) => ({
  post: state.posts
})

const mapDispatchToProps = {
  fetchPost
}

export default connect(mapStateToProps, mapDispatchToProps)(Post);
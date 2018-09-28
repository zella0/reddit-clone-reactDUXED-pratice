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

  // memoData = (data) => {
  //   let cache = { roots: [] }
  //   console.log(data)

  //   // loop through the data, with EACH index set a new key/pair value to cache 
  //   // declared parent_id to reference current data's key
  //   // cache's key = current data's key
  //   // cache's key value = current data's value
  //   for (let i = 0; i < data.length; i++) {
  //     cache[data[i].id] = data[i]

  //     // if current data has no key/pair of parent_comment_id
  //     // that must means that it is the ROOT so push it to our cache.roots
  //     let parent_id = data[i].parent_comment_id
  //     if (parent_id) {
  //       // if no children key in cache.roots, declare one that is an array (expecting to take on objects if no parent_id exists)
  //       cache[parent_id].children ? cache[parent_id].children.push(data[i]) : cache[parent_id].children = [data[i]]
  //     } else {
  //       cache.roots.push(data[i])
  //     }
  //   }
  //   return cache.roots
  // }

  render() {

    const memoData = (data) => {
      let cache = { roots: [] }
      // console.log(data)

      // loop through the data, with EACH index set a new key/pair value to cache 
      // declared parent_id to reference current data's key
      // cache's key = current data's key
      // cache's key value = current data's value
      
      for (let i = 0; i < data.length; i++) {
        cache[data[i].id] = data[i]
        
        // if current data has no key/pair of parent_comment_id
        // that must means that it is the ROOT so push it to our cache.roots
        let parent_id = data[i].parent_comment_id
        if (parent_id) {
          // if no children key in cache.roots, declare one that is an array (expecting to take on objects if no parent_id exists)
          cache[parent_id].children ? cache[parent_id].children.push(data[i]) : cache[parent_id].children = [data[i]]
        } else {
          cache.roots.push(data[i])
        }
      }
      // console.log('memo test', cache.roots)
      return cache.roots
    }
    var memodComments;
    if (this.props.post[0]) {
      memodComments = memoData(this.props.post[0].comments);
    }

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
          {/* {console.log(memodComments)} */}
          <CommentsList
            comments={memodComments}
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
import React, { Component } from 'react';
import { connect } from 'react-redux';

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCaretDown } from '@fortawesome/free-solid-svg-icons';
import { faCaretUp } from '@fortawesome/free-solid-svg-icons';

import { upvotePost } from '../redux/actions/postsActions';
import { downvotePost } from '../redux/actions/postsActions';



class PostsVotes extends Component {

  render() { 
    let voteBoxStyle = {
      display: 'flex',
      flexDirection: 'column',
      alignItems: 'center',
      marginRight: '1.2rem'
    }
    return (
      <div style={voteBoxStyle}>
        <FontAwesomeIcon 
        icon={faCaretUp} 
        size="2x" 
        color="red"
        onClick={() => this.props.upvotePost(this.props.id)}
        />
          <span>{this.props.upvotes}</span>
        <FontAwesomeIcon 
        icon={faCaretDown} 
        size="2x" 
        color="blue"
        onClick={() => this.props.downvotePost(this.props.id)}
        />
      </div>
    );
  }
  
}

const mapStateToProps = (state) => ({
  posts: state.posts
})

const mapDispatchToProps = {
  upvotePost,
  downvotePost
}
 
export default connect(mapStateToProps, mapDispatchToProps)(PostsVotes);
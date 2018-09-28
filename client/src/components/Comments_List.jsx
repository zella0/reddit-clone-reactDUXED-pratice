import React, { Component } from 'react';
import { connect } from 'react-redux';

import { ListGroup } from 'reactstrap';
import Comment from './Comment';

class CommentsList extends Component {
  componentDidMount(){
    console.log(this.props)
  }
  render() {
    return (
      <React.Fragment>
        <ListGroup>
          {this.props.comments.map((comment) => {
            return <Comment key={comment.id} comment={comment} />
          })}
        </ListGroup>
      </React.Fragment>
    );
  }

}

const mapStateToProps = (state) => ({
  post: state.posts
})

const mapDispatchToProps = {

}


export default connect(mapStateToProps, mapDispatchToProps)(CommentsList);
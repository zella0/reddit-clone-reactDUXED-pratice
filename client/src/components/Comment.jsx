import React, { Component } from 'react';
import { connect } from 'react-redux';

import { ListGroupItem } from 'reactstrap';
import CommentsList from './Comment';


class Comment extends Component {
  componentDidMount(){
    console.log('comment CWM',this.props)
    console.log('*****')
    // if (this.props.comment){
    //   // console.log(this.props);
    // }
  }
  render() {
    let comment = this.props.comment;
    // console.log('props', this.props)
    // console.log('asf', comment)
    // console.log(comment.content)
    // return (
    //   this.props.comment.id && 
      // <React.Fragment>
      //   <p>{comment.content}</p>
      //   <CommentsList comments={comment.children} />
      // </React.Fragment>
    // );
    if(this.props.comment){
      return (
        <React.Fragment>
          <p>{comment.content}</p>
          <CommentsList comments={comment.children} />
        </React.Fragment>
      )
    } else {
      return <div>Loading...</div>
    }
  }
}

const mapStateToProps = (state) => ({
  // post: state.posts
})

const mapDispatchToProps = {

}


export default connect(mapStateToProps, mapDispatchToProps)(Comment);
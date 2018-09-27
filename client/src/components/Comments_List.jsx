import React, { Component } from 'react';
import { connect } from 'react-redux';

import { ListGroup, ListGroupItem } from 'reactstrap';

class CommentsList extends Component {

  // renderBookmarks(root) {
  //   if (root.children) {
  //     return (
  //       <div>
  //         <strong>{root.name}</strong>
  //         <ul>
  //           {root.children.map(c => (<li key={c.id}>{this.renderBookmarks(c)} </li>))}
  //         </ul>
  //       </div>
  //     );
  //   }
  //   else {
  //     return <a href={root.url}> {root.name} </a>;
  //   }
  // }

  // root = rootComment   // rootComment means parent_comment_id MUST BE null
  // root.children =  comment.parent_comment_id  is the same as 

  // loop through comments and FILTER out comments with no parent_comment_id only
  // if comment.parent_comment_id is true RETURN 
  // 

  getRootComments = () => {
    const comments = this.props.post[0].comments;
    const rootComments = comments.filter((comment)=>{
      return comment.parent_comment_id === null;
    })
    return rootComments;
  }
  
  renderRootTree = (comments) => {
    // if parentComments DOES NOT exist, declare it as ROOTcomments 
    // else if it DOES exist, declare it as comments
      // init root
      var parentComments = '';
      if (!parentComments){
        parentComments = this.getRootComments();
      } else {
        // base case
      parentComments = comments;
      if (parentComments.length === 0){
        return;
      }
    }
    
    // loop through each original ROOT parent comment 
    // loop through ALL comments and filter out comments IF parentComment.id === childComment's parent id
    parentComments.map((parentComment, i)=>{
      const childComments = comments.filter((comment) => {
        return parentComment.id === comment.parent_comment_id
      })
      console.log(childComments[i])
    // if the above IS true 
      if(childComments[i]){
        return (
          <div>
            <ListGroup>
              <ListGroupItem>
                {/* recursion goes underneath here i think...  */}
                
                <p className="display-5">{childComments[i].content}</p>

              </ListGroupItem>
            </ListGroup>
          </div>
        )
      }
    })

    
    // const childrenComments = allComments.filter((comment) => {
    //   return comment.parent_comment_id === rootComment.id;
    // })
    
    // return childrenComments;
  }

  render() {
    // console.log(this.props.post[0].comments);
    // console.log(this.getRootComments());
    // console.log(this.renderRootTree());
    this.renderRootTree(this.props.post[0].comments);

    

    return (
      <React.Fragment>

      </React.Fragment>
    )


  }

}

// renderComments = () => {
//   const comments = this.props.post[0].comments;
//   return comments.map((comment) => {
//     return (
//       <ListGroupItem key={comment.id}>
//         <p className="display-5">{comment.content}</p>
//       </ListGroupItem>
//     );
//   });
// }
// render() {
//   return (
//     !!this.props.post[0].comments &&
//     <React.Fragment>
//       <ListGroup>
//         {this.renderComments()}
//       </ListGroup>
//     </React.Fragment>
//   );
// }

const mapStateToProps = (state) => ({
  post: state.posts
})

const mapDispatchToProps = {

}


export default connect(mapStateToProps, mapDispatchToProps)(CommentsList);
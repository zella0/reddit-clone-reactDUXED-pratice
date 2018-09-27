import {
  FETCH_POSTS,
  FETCH_POST,
  CREATE_POST,
  UPVOTE_POST,
  DOWNVOTE_POST
} from './types';

import axios from 'axios';

export const fetchPosts = () => dispatch => {
  let result;
  axios.get('http://localhost:8000/posts')
    .then((response) => {
      result = response.data.posts;
      return Promise.all(result.map((post) => {
        return axios.get(`http://localhost:8000/posts/${post.id}/commentscount`)
          .then((res) => {
            post.comments_count = res.data.count;
          })
      }));
    })
    .then(()=>{
      dispatch({
        type: FETCH_POSTS,
        payload: result
      })
    })
}

export const fetchPost = (postID) => dispatch => {
  axios.get(`http://localhost:8000/posts/${postID}`)
    .then((response) => {
      dispatch({
        type: FETCH_POST,
        payload: response.data
      })
    })
}

export const createPost = (postBody, history) => dispatch => {
  axios.post('http://localhost:8000/posts/new', postBody)
    .then((response) => {
      dispatch({
        type: CREATE_POST,
        payload: response.data
      })
      history.push('/posts');
    })
}

export const upvotePost = (postID) => dispatch => {
  axios.get(`http://localhost:8000/posts/${postID}/upvote`)
    .then((response) => {
      dispatch({
        type: UPVOTE_POST,
        payload: response.data
      })
    })
}

export const downvotePost = (postID) => dispatch => {
  axios.get(`http://localhost:8000/posts/${postID}/downvote`)
    .then((response) => {
      dispatch({
        type: DOWNVOTE_POST,
        payload: response.data
      })
    })
}
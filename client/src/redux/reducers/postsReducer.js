import {
  FETCH_POSTS,
  FETCH_POST,
  CREATE_POST,
  UPVOTE_POST,
  DOWNVOTE_POST
} from '../actions/types';

const initialState = [];

export default (state = initialState, action) => {
  switch(action.type){
    case FETCH_POSTS:
    return action.payload;

    case FETCH_POST:
    // console.log(action.payload);
    
    let commentsCount = Number(action.payload.comments_amount[0].count);
    let commentsArr = action.payload.comments;
    
    action.payload.post[0].comments_amount = commentsCount;
    action.payload.post[0].comments = commentsArr;
    return action.payload.post;

    case CREATE_POST:
    return [...state, ...action.payload];

    case UPVOTE_POST:
    console.log(state)
    return state.map((curVal) => {
      curVal.id === action.payload ? curVal.upvotes++ : null;
      return curVal;
    });

    case DOWNVOTE_POST:
    return state.map((curVal) => {
      curVal.id === action.payload ? curVal.upvotes-- : null;
      return curVal;
    });

    default:
    return state;
  }
}
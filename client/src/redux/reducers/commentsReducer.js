import {
  FETCH_COMMENTS,
} from '../actions/types';

const initialState = [];

export default (state = initialState, action) => {
  switch(action.type){
    case FETCH_COMMENTS:
    return state;
    
    default:
      return state;
  }
}
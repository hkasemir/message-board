import types from '../actions/types';

const initialState = [];

export default function posts(state=initialState, action) {
  switch (action.type) {
    case types.FETCH_POSTS_COMPLETED:
      return action.payload;

    default:
      return state;
  }
}


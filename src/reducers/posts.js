import types from '../actions/types';
import {normalizePosts} from '../helpers/reducer-helper';

export const postsInitialState = {
  all: [],
  byAuthor: {},
  byCategory: {}
};

export default function posts(state=postsInitialState, action) {
  switch (action.type) {
    case types.FETCH_POSTS_COMPLETED:
      return normalizePosts(action.payload);

    default:
      return state;
  }
}


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

    case types.ADD_NEW_POST_COMPLETED:
      const newPostList = [...state.all, action.payload];
      return normalizePosts(newPostList);

    default:
      return state;
  }
}


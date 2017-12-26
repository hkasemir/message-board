import types from '../actions/types';
import {
  normalizePosts,
  mapEdits
} from '../helpers/reducer-helper';

export const postsInitialState = {
  all: [],
  byAuthor: {},
  byCategory: {}
};

export default function posts(state=postsInitialState, action) {
  const {type, payload} = action;
  let newPostList;
  switch (type) {
    case types.FETCH_POSTS_COMPLETED:
      return normalizePosts(payload);

    case types.ADD_NEW_POST_COMPLETED:
      newPostList = [...state.all, payload];
      return normalizePosts(newPostList);

    case types.DELETE_POST_COMPLETED:
      newPostList = state.all.filter(post => post.id !== payload);
      return normalizePosts(newPostList);

    case types.EDIT_POST_COMPLETED:
      newPostList = mapEdits(state.all, payload);
      return normalizePosts(newPostList);

    default:
      return state;
  }
}


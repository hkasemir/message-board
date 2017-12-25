import types from './types';
import {createAction} from '../helpers/redux-helper';

export default {
  fetchCategories() {
    return createAction(types.FETCH_CATEGORIES);
  },
  fetchPosts() {
    return createAction(types.FETCH_POSTS);
  },
  fetchPostComments(postId) {
    return createAction(types.FETCH_POST_COMMENTS, postId);
  },
  addNewPost(post) {
    return createAction(types.ADD_NEW_POST, post);
  }
};

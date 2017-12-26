import types from './types';
import {createAction} from '../helpers/redux-helper';

export default {
  fetchCategories() {
    return createAction(types.FETCH_CATEGORIES);
  },
  fetchPosts() {
    return createAction(types.FETCH_POSTS);
  },
  addNewPost(post) {
    return createAction(types.ADD_NEW_POST, post);
  },
  editPost(post) {
    return createAction(types.EDIT_POST, post);
  },
  deletePost(postId) {
    return createAction(types.DELETE_POST, postId);
  },
  fetchPostComments(postId) {
    return createAction(types.FETCH_POST_COMMENTS, postId);
  },
  addComment(commentForm) {
    return createAction(types.ADD_NEW_COMMENT, commentForm);
  }
};

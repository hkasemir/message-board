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
  voteOnPost(voteForm) {
    return createAction(types.VOTE_ON_POST, voteForm);
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
  },
  voteOnComment(voteForm) {
    return createAction(types.VOTE_ON_COMMENT, voteForm);
  },
  deleteComment(comment) {
    return createAction(types.DELETE_COMMENT, comment);
  },
  editComment(commentForm) {
    return createAction(types.EDIT_COMMENT, commentForm);
  }
};

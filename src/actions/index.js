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
  }
};

import types from '../actions/types';
import {createSaga} from '../helpers/redux-helper';
import readableApi from '../services/readable-api';

export default {
  fetchAll() {
    return createSaga(
      readableApi.fetchPosts,
      types.FETCH_POSTS_COMPLETED
    )();
  },
  addNew(action) {
    return createSaga(
      readableApi.addNewPost,
      types.ADD_NEW_POST_COMPLETED
    )(action.payload);
  },
  editPost(action) {
    return createSaga(
      readableApi.editPost,
      types.EDIT_POST_COMPLETED
    )(action.payload);
  },
  vote(action) {
    return createSaga(
      readableApi.voteOnPost,
      types.VOTE_ON_POST_COMPLETED
    )(action.payload);
  },
  deletePost(action) {
    return createSaga(
      readableApi.deletePost,
      types.DELETE_POST_COMPLETED
    )(action.payload);
  },
}



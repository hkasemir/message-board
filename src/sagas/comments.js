import types from '../actions/types';
import {createSaga} from '../helpers/redux-helper';
import readableApi from '../services/readable-api';

export default {
  fetchPostComments(action) {
    return createSaga(
      readableApi.fetchPostComments,
      types.FETCH_POST_COMMENTS_COMPLETED
    )(action.payload);
  },
  addComment(action) {
    return createSaga(
      readableApi.addComment,
      types.ADD_NEW_COMMENT_COMPLETED
    )(action.payload);
  },
  editComment(action) {
    return createSaga(
      readableApi.editComment,
      types.EDIT_COMMENT_COMPLETED
    )(action.payload);
  },
  deleteComment(action) {
    return createSaga(
      readableApi.deleteComment,
      types.DELETE_COMMENT_COMPLETED
    )(action.payload);
  },
}




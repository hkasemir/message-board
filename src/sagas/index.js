import {takeLatest, takeEvery} from 'redux-saga/effects';
import types from '../actions/types';
import categories from './categories';
import posts from './posts';
import comments from './comments';

export function* rootSaga() {
  yield takeLatest(types.FETCH_CATEGORIES, categories.fetchAll);
  yield takeLatest(types.FETCH_POSTS, posts.fetchAll);
  yield takeEvery(types.ADD_NEW_POST, posts.addNew);
  yield takeEvery(types.VOTE_ON_POST, posts.vote);
  yield takeEvery(types.EDIT_POST, posts.editPost);
  yield takeEvery(types.DELETE_POST, posts.deletePost);
  yield takeEvery(types.FETCH_POST_COMMENTS, comments.fetchPostComments);
  yield takeEvery(types.ADD_NEW_COMMENT, comments.addComment);
  yield takeEvery(types.VOTE_ON_COMMENT, comments.vote);
  yield takeEvery(types.EDIT_COMMENT, comments.editComment);
  yield takeEvery(types.DELETE_COMMENT, comments.deleteComment);
}

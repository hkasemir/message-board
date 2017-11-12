import {takeEvery} from 'redux-saga/effects';
import types from '../actions/types';
import categories from './categories';
import posts from './posts';

export function* rootSaga() {
  yield takeEvery(types.FETCH_CATEGORIES, categories.fetchAll);
  yield takeEvery(types.FETCH_POSTS, posts.fetchAll);
}

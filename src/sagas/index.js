import {takeLatest} from 'redux-saga/effects';
import types from '../actions/types';
import categories from './categories';
import posts from './posts';

export function* rootSaga() {
  yield takeLatest(types.FETCH_CATEGORIES, categories.fetchAll);
  yield takeLatest(types.FETCH_POSTS, posts.fetchAll);
}

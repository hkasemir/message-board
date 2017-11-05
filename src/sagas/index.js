import {takeEvery} from 'redux-saga/effects';
import types from '../actions/types';
import categories from './categories';

export function* rootSaga() {
  yield takeEvery(types.FETCH_CATEGORIES, categories.fetchAll);
}

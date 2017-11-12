import {call, put} from 'redux-saga/effects';

export function createAction(type, payload) {
  return {
    type,
    payload
  };
}

export function createSaga(asyncFn, type) {
  return function* (fnArgs) {
    const payload = yield call(asyncFn, fnArgs);
    yield put(createAction(type, payload));
  };
}

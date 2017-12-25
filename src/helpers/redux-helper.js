import {call, put} from 'redux-saga/effects';

export function createAction(type, payload, args) {
  return {
    type,
    payload,
    args
  };
}

export function createSaga(asyncFn, completedActionType) {
  return function* (fnArgs) {
    const payload = yield call(asyncFn, fnArgs);
    yield put(createAction(completedActionType, payload, fnArgs));
  };
}

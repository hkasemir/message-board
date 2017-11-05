import types from '../actions/types';

const initialState = [];

export default function categories(state=initialState, action) {
  switch (action.type) {
    case types.FETCH_CATEGORIES_COMPLETED:
      return action.payload;

    default:
      return state;
  }
}

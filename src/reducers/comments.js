import _ from 'lodash';
import types from '../actions/types';

export const commentsInitialState = {};

export default function comments(state=commentsInitialState, action) {
  const {payload, type, args} = action;
  switch (type) {
    case types.FETCH_POST_COMMENTS_COMPLETED:
      const postId = args;
      return {
        ...state,
        [postId]: payload
      };

    case types.ADD_NEW_COMMENT_COMPLETED:
      const {parentId} = payload;
      return {
        ...state,
        [parentId]: [...state[parentId], payload]
      };

    case types.DELETE_POST_COMPLETED:
      const newState = _.cloneDeep(state);
      delete newState[payload];
      return newState;

    default:
      return state;
  }
}


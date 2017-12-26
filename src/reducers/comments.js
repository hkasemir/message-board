import _ from 'lodash';
import {
  mapEdits
} from '../helpers/reducer-helper';
import types from '../actions/types';

export const commentsInitialState = {};

export default function comments(state=commentsInitialState, action) {
  const {payload, type, args} = action;
  let parentId;
  switch (type) {
    case types.FETCH_POST_COMMENTS_COMPLETED:
      parentId = args;
      return {
        ...state,
        [parentId]: payload
      };

    case types.ADD_NEW_COMMENT_COMPLETED:
      parentId = payload.parentId;
      return {
        ...state,
        [parentId]: [...state[parentId], payload]
      };

    case types.EDIT_COMMENT_COMPLETED:
      parentId = payload.parentId;
      return {
        ...state,
        [parentId]: mapEdits(state[parentId], payload)
      };

    case types.DELETE_COMMENT_COMPLETED:
      parentId = payload.parentId;
      return {
        ...state,
        [parentId]: state[parentId].filter(comment => comment.id !== payload.id)
      };

    case types.DELETE_POST_COMPLETED:
      const newState = _.cloneDeep(state);
      delete newState[payload];
      return newState;

    default:
      return state;
  }
}


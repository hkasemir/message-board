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

    default:
      return state;
  }
}


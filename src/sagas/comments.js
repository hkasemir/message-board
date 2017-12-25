import types from '../actions/types';
import {createSaga} from '../helpers/redux-helper';
import readableApi from '../services/readable-api';

export default {
  fetchPostComments(action) {
    return createSaga(
      readableApi.fetchPostComments,
      types.FETCH_POST_COMMENTS_COMPLETED
    )(action.payload);
  }
}




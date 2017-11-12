import types from '../actions/types';
import {createSaga} from '../helpers/redux-helper';
import readableApi from '../services/readable-api';

export default {
  fetchAll() {
    return createSaga(
      readableApi.fetchPosts,
      types.FETCH_POSTS_COMPLETED
    )();
  }
}



import types from './types';
import {createAction} from '../helpers/redux-helper';

export default{
  fetchCategories() {
    return createAction(types.FETCH_CATEGORIES);
  }
}

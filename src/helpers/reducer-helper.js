import _ from 'lodash';
import {postsInitialState} from '../reducers/posts';

export function normalizePosts(posts) {
  return posts.reduce((state, post) => {
    state.all.push(post);
    if (state.byAuthor[post.author]) {
      state.byAuthor[post.author].push(post);
    } else {
      state.byAuthor[post.author] = [post];
    }
    if (state.byCategory[post.category]) {
      state.byCategory[post.category].push(post);
    } else {
      state.byCategory[post.category] = [post];
    }
    return state;
  }, _.cloneDeep(postsInitialState));
}

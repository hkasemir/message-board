import React, { Component } from 'react';
import _ from 'lodash';
import {ORDER_POSTS, FILTER_POSTS} from '../helpers/constants';

class PostsList extends Component {
  state = {
    orderBy: ORDER_POSTS.byVoteScore,
    filterBy: FILTER_POSTS.all
  }

  render() {
    const {posts} = this.props;
    const {orderBy, filterBy} = this.state;

    const showPosts = _.orderBy(posts[filterBy], orderBy, 'desc');

    return (
      <ul>
        {
        showPosts.map(post => <li key={post.id}>+{post.voteScore} - {post.title}</li>)
        }
      </ul>
    );
  }
}

export default PostsList;


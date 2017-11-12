import React, { Component } from 'react';
import _ from 'lodash';
import {ORDER_POSTS, FILTER_POSTS} from '../helpers/constants';
import './posts-list.css';

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
      <ul className='post-list-ul'>
        {
        showPosts.map(post => <li key={post.id} className='post-li'>
          <span className={post.voteScore >= 0 ? 'upvotes' : 'downvotes'}>{post.voteScore}</span>
          {post.title}
          <span className='post-author'>({post.author})</span>
          <span className='post-date'>Posted {(new Intl.DateTimeFormat('en-US', {month: 'long', day: 'numeric', year: 'numeric'})).format(post.timestamp)}</span>
        </li>)
        }
      </ul>
    );
  }
}

export default PostsList;


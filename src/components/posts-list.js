import React, { Component } from 'react';
import {Link} from 'react-router-dom';
import _ from 'lodash';
import PostHeader from './post-header';
import {ORDER_POSTS} from '../helpers/constants';
import './posts-list.css';

class PostsList extends Component {
  state = {
    orderBy: ORDER_POSTS.byVoteScore,
    ascending: false
  }

  handleReorder = (newOrderBy) => {
    const {orderBy} = this.state;
    if (newOrderBy === orderBy) {
      this.setState(prevState => ({ascending: !prevState.ascending}));
    } else {
      this.setState({
        orderBy: newOrderBy,
        ascending: false
      });
    }
  }

  render() {
    const {posts, category} = this.props;
    const {orderBy, ascending} = this.state;
    const filteredPosts = category ? posts.byCategory[category] : posts.all;

    const showPosts = _.orderBy(filteredPosts, orderBy, ascending ? 'asc' : 'desc');

    return (
      <section>
        <PostHeader
          category={category || 'all'}
          onReorder={this.handleReorder}
          ascending={ascending}
          orderBy={orderBy}
        />
        <ul className='post-list-ul'>
          {
            showPosts.map(post => <li key={post.id} className='post-li'>
              <span className={post.voteScore >= 0 ? 'upvotes' : 'downvotes'}>{post.voteScore}</span>
              <Link to={`/posts/${post.id}`}>{post.title}</Link>
              <span className='post-author'>({post.author})</span>
              <span className='post-date'>Posted {(new Intl.DateTimeFormat('en-US', {month: 'long', day: 'numeric', year: 'numeric'})).format(post.timestamp)} in {post.category}</span>
            </li>
            )}
          </ul>
        </section>
    );
  }
}

export default PostsList;


import React, { Component } from 'react';
import _ from 'lodash';
import PostHeader from './post-header';
import PostsListItem from './post-list-item';
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
    const {posts, category, onVote, onDelete} = this.props;
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
          {showPosts.map(post => <PostsListItem
            key={post.id}
            post={post}
            onVote={onVote}
            onDelete={onDelete}
          />)}
        </ul>
      </section>
    );
  }
}

export default PostsList;


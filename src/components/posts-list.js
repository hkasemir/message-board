import React, { Component } from 'react';
import {ORDER_POSTS} from '../helpers/constants';

class PostsList extends Component {
  render() {
    const {posts} = this.props;
    return (
      <ul>
        {
        posts.map(post => <li>{post.title}</li>)
        }
      </ul>
    );
  }
}

export default PostsList;


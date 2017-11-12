import React, { Component } from 'react';
import {connect} from 'react-redux';
import PostsList from '../components/posts-list';
import actions from '../actions';
import {ORDER_POSTS} from '../helpers/constants';


class Home extends Component {
  componentDidMount() {
    this.props.fetchPosts();
  }

  render() {
    const {posts} = this.props;
    return (
      <section>
        <PostsList
          posts={posts}
          orderBy={ORDER_POSTS.byVoteScore}
        />
      </section>
    );
  }
}

const mapStateToProps = state => ({
  posts: state.posts
});

const mapDispatchToProps = {
  fetchPosts: actions.fetchPosts
}

export default connect(mapStateToProps, mapDispatchToProps)(Home);

import React, { Component } from 'react';
import {connect} from 'react-redux';
import PostsList from '../components/posts-list';
import actions from '../actions';
import './main.css';


class Home extends Component {
  componentDidMount() {
    this.props.fetchPosts();
  }

  render() {
    const {
      posts,
      match: {
        params
      },
      voteOnPost
    } = this.props;
    return (
      <PostsList
        onVote={voteOnPost}
        posts={posts}
        category={params.categoryPath}
      />
    );
  }
}

const mapStateToProps = state => ({
  posts: state.posts
});

const mapDispatchToProps = {
  fetchPosts: actions.fetchPosts,
  voteOnPost: actions.voteOnPost
}

export default connect(mapStateToProps, mapDispatchToProps)(Home);

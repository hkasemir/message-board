import React, {Component} from 'react';
import {connect} from 'react-redux';
import _ from 'lodash';
import actions from '../actions';
import './post-details.css';

export class PostDetails extends Component {
  componentDidMount() {
    this.props.fetchPosts();
  }

  render() {
    const {post} = this.props
    return (
      <section className='post-details-container'>
        <h1>{_.get(post, 'title', 'Post Not Found')}</h1>
        {post && (
          <div>
            <p>by {post.author} - {new Date(post.timestamp).toLocaleString('en-us')}</p>
            <p>{post.voteScore} points in {post.category}</p>
            <p>{post.body}</p>
            <h3>Comments</h3>
          </div>
        )}
      </section>
    );
  }
}

const mapStateToProps = (state, props) => ({
  post: _.find(_.get(state, 'posts.all'), {id: props.match.params.postId})
});

const mapDispatchToProps = {
  fetchPosts: actions.fetchPosts
}

export default connect(mapStateToProps, mapDispatchToProps)(PostDetails);

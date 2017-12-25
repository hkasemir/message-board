import React, {Component} from 'react';
import {connect} from 'react-redux';
import _ from 'lodash';
import Comment from '../components/comment';
import actions from '../actions';
import './post-details.css';

export class PostDetails extends Component {
  componentDidMount() {
    const {fetchPosts, fetchComments, match: {params: {postId}}} = this.props;
    fetchPosts();
    fetchComments(postId);
  }

  render() {
    const {post, comments} = this.props
    return (
      <section className='post-details-container'>
        <h1>{_.get(post, 'title', 'Post Not Found')}</h1>
        {post && (
          <div>
            <p>by {post.author} - {new Date(post.timestamp).toLocaleString('en-us')}</p>
            <p>{post.voteScore} points in {post.category}</p>
            <p>{post.body}</p>
            <h3>Comments</h3>
            <ol className='comment-list-container'>
              {_.map(comments, comment => (
                <Comment comment={comment} />
              ))}
            </ol>
          </div>
        )}
      </section>
    );
  }
}

const mapStateToProps = (state, props) => ({
  post: _.find(_.get(state, 'posts.all'), {id: props.match.params.postId}),
  comments: _.get(state, ['comments', props.match.params.postId])
});

const mapDispatchToProps = {
  fetchPosts: actions.fetchPosts,
  fetchComments: actions.fetchPostComments
}

export default connect(mapStateToProps, mapDispatchToProps)(PostDetails);

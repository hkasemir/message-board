import React, {Component} from 'react';
import {connect} from 'react-redux';
import _ from 'lodash';
import EditPostModal from '../components/edit-post-modal';
import CommentModal from '../components/comment-modal';
import DeleteModal from '../components/delete-modal';
import Comment from '../components/comment';
import actions from '../actions';
import './post-details.css';

export class PostDetails extends Component {
  state = {
    isCommentModalOpen: false,
    isEditModalOpen: false,
    isDeleteModalOpen: false
  }

  componentDidMount() {
    const {fetchPosts, fetchComments, match: {params: {postId}}} = this.props;
    fetchPosts();
    fetchComments(postId);
  }

  handleDeletePost = () => {
    const {post, deletePost} = this.props;
    deletePost(post.id);
  }

  handleVote = (evt) => {
    const {post, voteOnPost} = this.props;
    const voteForm = {
      postId: post.id,
      option: evt.target.name
    };
    voteOnPost(voteForm);
  }

  render() {
    const {post, comments} = this.props
    const {isEditModalOpen, isCommentModalOpen, isDeleteModalOpen} = this.state;
    return (
      <section className='post-details-container'>
        <h1>{_.get(post, 'title', 'Post Not Found')}</h1>
        {post && (
          <div>
            <p>by {post.author} - {new Date(post.timestamp).toLocaleString('en-us')}
              <button onClick={() => this.setState({isEditModalOpen: true})}>edit post</button>
              <button onClick={() => this.setState({isDeleteModalOpen: true})}>delete post</button>
          </p>
          <p>
            <button name='upVote' onClick={this.handleVote}>+</button>
            {post.voteScore}
            <button name='downVote' onClick={this.handleVote}>-</button>
            points in {post.category}</p>
            <p>{post.body}</p>
            <h3>{post.commentCount} Comments <button onClick={() => this.setState({isCommentModalOpen: true})}>+ Add Comment</button></h3>
            <ol className='comment-list-container'>
              {_.map(comments, comment => (
                <Comment key={comment.id} comment={comment} />
              ))}
            </ol>
          </div>
        )}
        <EditPostModal
          isOpen={isEditModalOpen}
          post={post}
          onClose={() => this.setState({isEditModalOpen: false})}
        />
        <CommentModal
          isOpen={isCommentModalOpen}
          postId={_.get(post, 'id')}
          onClose={() => this.setState({isCommentModalOpen: false})}
        />
        <DeleteModal
          isOpen={isDeleteModalOpen}
          onDelete={this.handleDeletePost}
          onClose={() => this.setState({isDeleteModalOpen: false})}
        />
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
  fetchComments: actions.fetchPostComments,
  addComment: actions.addComment,
  deletePost: actions.deletePost,
  voteOnPost: actions.voteOnPost
};

export default connect(mapStateToProps, mapDispatchToProps)(PostDetails);

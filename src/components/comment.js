import React, { PureComponent } from 'react';
import {connect} from 'react-redux';
import CommentModal from './comment-modal';
import DeleteModal from '../components/delete-modal';
import actions from '../actions';
import './comment.css';

class Comment extends PureComponent {
  state = {
    isEditModalOpen: false,
    isDeleteModalOpen: false
  }

  handleVote = (evt) => {
    const {comment, voteOnComment} = this.props;
    const voteForm = {
      commentId: comment.id,
      option: evt.target.name
    };
    voteOnComment(voteForm);
  }

  handleDeleteComment = () => {
    const {comment, deleteComment} = this.props;
    deleteComment(comment);
  }

  render() {
    const {comment} = this.props;
    const {isEditModalOpen, isDeleteModalOpen} = this.state;
    return (
      <li key={comment.id} className='comment-li'>
        <button name='upVote' onClick={this.handleVote}>+</button>
        <span className={comment.voteScore >= 0 ? 'upvotes' : 'downvotes'}>{comment.voteScore}</span>
        <button name='downVote' onClick={this.handleVote}>-</button>
        <span className='comment-body'>{comment.body}</span>
        <span className='comment-info'>({comment.author}) {(new Intl.DateTimeFormat('en-US', {month: 'long', day: 'numeric', year: 'numeric'})).format(comment.timestamp)}</span>
        <button onClick={() => this.setState({isEditModalOpen: true})}>edit</button>
        <button onClick={() => this.setState({isDeleteModalOpen: true})}>delete</button>
        <CommentModal
          isOpen={isEditModalOpen}
          comment={comment}
          onClose={() => this.setState({isEditModalOpen: false})}
        />
        <DeleteModal
          isOpen={isDeleteModalOpen}
          onDelete={this.handleDeleteComment}
          onClose={() => this.setState({isDeleteModalOpen: false})}
        />
      </li>
    );
  }
}

const mapDispatchToProps = {
  deleteComment: actions.deleteComment,
  voteOnComment: actions.voteOnComment
}
export default connect(null, mapDispatchToProps)(Comment);



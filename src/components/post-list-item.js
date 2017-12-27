import React, { Component } from 'react';
import {Link} from 'react-router-dom';
import EditPostModal from '../components/edit-post-modal';
import DeleteModal from '../components/delete-modal';
import './posts-list.css';

class PostsListItem extends Component {
  state = {
    isEditModalOpen: false,
    isDeleteModalOpen: false
  }

  handleVote = (evt) => {
    const {onVote, post} = this.props;
    const voteForm = {
      postId: post.id,
      option: evt.target.name
    };
    onVote(voteForm);
  }

  handleDeletePost = () => {
    const {post, onDelete} = this.props;
    onDelete(post.id);
  }

  render() {
    const {isEditModalOpen, isDeleteModalOpen} = this.state;
    const {post} = this.props;

    return (
      <li className='post-li'>
        <button name='upVote' onClick={this.handleVote}>+</button>
        <span className={post.voteScore >= 0 ? 'upvotes' : 'downvotes'}>{post.voteScore}</span>
        <button name='downVote' onClick={this.handleVote}>-</button>
        <Link to={`/${post.category}/${post.id}`}>{post.title}  -  {post.commentCount} comments</Link>
        <span className='post-author'>{post.author}</span>
        <span className='post-date'>Posted {(new Intl.DateTimeFormat('en-US', {month: 'long', day: 'numeric', year: 'numeric'})).format(post.timestamp)} in {post.category}</span>
        <button onClick={() => this.setState({isEditModalOpen: true})}>edit</button>
        <button onClick={() => this.setState({isDeleteModalOpen: true})}>delete</button>
        <EditPostModal
          isOpen={isEditModalOpen}
          post={post}
          onClose={() => this.setState({isEditModalOpen: false})}
        />
        <DeleteModal
          isOpen={isDeleteModalOpen}
          onDelete={this.handleDeletePost}
          onClose={() => this.setState({isDeleteModalOpen: false})}
        />
      </li>
    );
  }
}

export default PostsListItem;


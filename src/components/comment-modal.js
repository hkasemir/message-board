import React, {Component} from 'react';
import {connect} from 'react-redux';
import _ from 'lodash';
import generateUUID from 'uuid/v1';
import actions from '../actions';
import Modal from 'react-modal';
import './edit-post-modal.css';
Modal.setAppElement('#root');

function getDefaultState(props) {
  return {
    body: _.get(props.post, 'body', ''),
    author: _.get(props.post, 'author', '')
  };
}

class CommentModal extends Component {
  constructor(props) {
    super(props);
    this.state = getDefaultState(props);
  }

  componentWillReceiveProps(newProps) {
    this.setState(getDefaultState(newProps));
  }

  handleUpdateText = (evt) => {
    const {value, name} = evt.target;
    this.setState({
      [name]: value
    });
  }

  handleSubmit = () => {
    const {
      body,
      author
    } = this.state;

    const {addComment, editComment, onClose, comment, postId} = this.props;
    if (comment) {
      return editComment()
    }

    addComment({
      id: generateUUID(),
      timestamp: Date.now(),
      body,
      author,
      parentId: postId
    });
    this.setState(getDefaultState(this.props));
    onClose();
  }

  render() {
    const {
      isOpen,
      onClose
    } = this.props;
    const {
      body,
      author
    } = this.state;
    return (
      <Modal
        isOpen={isOpen}
        onRequestClose={onClose}>
        <div className='modal-contents-container'>
          <input
            type='text'
            className='author-input'
            name='author'
            placeholder='Author'
            value={author}
            onChange={this.handleUpdateText}
          />
          <textarea
            name='body'
            placeholder='Body'
            className='body-input'
            value={body}
            onChange={this.handleUpdateText}
          />
          <input type='submit' value='submit' onClick={this.handleSubmit} />
        </div>
      </Modal>
    );
  }
}

const mapDispatchToProps = {
  addComment: actions.addComment,
  editComment: actions.editComment
};

export default connect(null, mapDispatchToProps)(CommentModal);

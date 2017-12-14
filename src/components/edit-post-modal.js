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
    title: _.get(props.post, 'title', ''),
    body: _.get(props.post, 'body', ''),
    author: _.get(props.post, 'author', ''),
    category: _.get(props.post, 'category', props.category)
  };
}

class EditPostModal extends Component {
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

  handleSubmitEdits = () => {
    const {
      title,
      body,
      author,
      category
    } = this.state;

    const {addNewPost, onClose} = this.props;

    addNewPost({
      id: generateUUID(),
      timestamp: Date.now(),
      title,
      body,
      author,
      category
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
      title,
      body,
      author,
      category
    } = this.state;
    return (
      <Modal
        isOpen={isOpen}
        onRequestClose={onClose}>
        <input
          type='text'
          name='title'
          placeholder='Title'
          value={title}
          onChange={this.handleUpdateText}
        />
        <input
          type='text'
          name='author'
          placeholder='Author'
          value={author}
          onChange={this.handleUpdateText}
        />
        <input
          type='text'
          name='category'
          placeholder='Category'
          value={category}
          onChange={this.handleUpdateText}
        />
        <textarea
          name='body'
          placeholder='Body'
          value={body}
          onChange={this.handleUpdateText}
        />
        <input type='submit' value='add new post' onClick={this.handleSubmitEdits} />
      </Modal>
    );
  }
}

const mapDispatchToProps = {
  addNewPost: actions.addNewPost
};

export default connect(null, mapDispatchToProps)(EditPostModal);

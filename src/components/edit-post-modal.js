import React, {Component} from 'react';
import {connect} from 'react-redux';
import _ from 'lodash';
import generateUUID from 'uuid/v1';
import actions from '../actions';
import Modal from 'react-modal';
import Select from 'react-select';
import './edit-post-modal.css';
import 'react-select/dist/react-select.css';
Modal.setAppElement('#root');

function getDefaultState(props) {
  return {
    title: _.get(props.post, 'title', ''),
    body: _.get(props.post, 'body', ''),
    author: _.get(props.post, 'author', ''),
    category: _.get(props.post, 'category', props.category)
  };
}

const getSelectOptions = (categories) => {
  return _.map(categories, category => ({
    label: _.capitalize(category.name),
    value: category.path
  }));
};

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

  handleUpdateCategory = (option) => {
    this.setState({category: option.value});
  }

  handleSubmitEdits = () => {
    const {
      title,
      body,
      author,
      category
    } = this.state;

    const {addNewPost, editPost, onClose, post} = this.props;
    if (post) {
      editPost({...post, title, body});
      return onClose();
    }

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
      onClose,
      categories,
      post
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
        <div className='modal-contents-container'>
          <input
            type='text'
            name='title'
            className='title-input'
            placeholder='Title'
            value={title}
            onChange={this.handleUpdateText}
          />
          <input
            type='text'
            className='author-input'
            name='author'
            disabled={!_.isEmpty(post)}
            placeholder='Author'
            value={author}
            onChange={this.handleUpdateText}
          />
          <Select
            className='select-container'
            placeholder='Category'
            disabled={!_.isEmpty(post)}
            options={getSelectOptions(categories)}
            value={category}
            onChange={this.handleUpdateCategory}
            clearable={false}
          />
          <textarea
            name='body'
            placeholder='Body'
            className='body-input'
            value={body}
            onChange={this.handleUpdateText}
          />
          <input type='submit' value='submit' onClick={this.handleSubmitEdits} />
        </div>
      </Modal>
    );
  }
}

const mapStateToProps = (state) => ({
  categories: state.categories
});

const mapDispatchToProps = {
  addNewPost: actions.addNewPost,
  editPost: actions.editPost
};

export default connect(mapStateToProps, mapDispatchToProps)(EditPostModal);

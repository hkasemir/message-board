import React, {PureComponent} from 'react';
import Modal from 'react-modal';
import './edit-post-modal.css';
Modal.setAppElement('#root');

class DeleteModal extends PureComponent {
  handleDelete = () => {
    const {
      onDelete,
      onClose
    } = this.props;

    onDelete();
    onClose();
  }

  render() {
    const {
      isOpen,
      onClose
    } = this.props;
    return (
      <Modal
        isOpen={isOpen}
        onRequestClose={onClose}>
        <div className='modal-contents-container'>
          <h3>Are you sure you want to delete this item?</h3>
          <input type='submit' value='yes' onClick={this.handleDelete} />
          <input type='submit' value='no' onClick={onClose} />
        </div>
      </Modal>
    );
  }
}

export default DeleteModal;

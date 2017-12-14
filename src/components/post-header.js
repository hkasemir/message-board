import React, {PureComponent} from 'react';
import EditPostModal from './edit-post-modal';
import {ORDER_POSTS} from '../helpers/constants';
import './post-header.css';

export default class PostHeader extends PureComponent {
  state = {
    isModalOpen: false
  }

  determineClassName(type) {
    const {orderBy, ascending} = this.props;

    if (type === orderBy) {
      if (ascending) {
        return 'ascending';
      }
      return 'descending';
    }
    return 'hidden';
  }

  render() {
    const {onReorder, category} = this.props;
    const {isModalOpen} = this.state;
    return (
      <header className='post-header-container'>
        <div>
          <h2 className='title'>{category} posts</h2>
          <button className='button--add-post' onClick={() => this.setState({isModalOpen: true})}>+ add post</button>
        </div>
        <span>
          order by
          <button className='button--toggle-order' onClick={() => onReorder(ORDER_POSTS.byVoteScore)}>
            score <span className={this.determineClassName(ORDER_POSTS.byVoteScore)}>^</span>
          </button>
          <button className='button--toggle-order' onClick={() => onReorder(ORDER_POSTS.byTimestamp)}>
            recent <span className={this.determineClassName(ORDER_POSTS.byTimestamp)}>^</span>
          </button>
          <button className='button--toggle-order' onClick={() => onReorder(ORDER_POSTS.byAuthor)}>
            author <span className={this.determineClassName(ORDER_POSTS.byAuthor)}>^</span>
          </button>
        </span>
        <EditPostModal
          category={category}
          isOpen={isModalOpen}
          onClose={() => this.setState({isModalOpen: false})}
        />
      </header>
    );
  }
}

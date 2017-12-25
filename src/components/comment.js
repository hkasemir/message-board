import React, { PureComponent } from 'react';
import './comment.css';

class Comment extends PureComponent {
  render() {
    const {comment} = this.props;
    return (
      <li key={comment.id} className='comment-li'>
        <span className={comment.voteScore >= 0 ? 'upvotes' : 'downvotes'}>{comment.voteScore}</span>
        <span className='comment-body'>{comment.body}</span>
        <span className='comment-info'>({comment.author}) {(new Intl.DateTimeFormat('en-US', {month: 'long', day: 'numeric', year: 'numeric'})).format(comment.timestamp)}</span>
      </li>
    );
  }
}

export default Comment;



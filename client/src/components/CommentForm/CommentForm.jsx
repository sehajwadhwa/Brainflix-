import React from 'react';
import './CommentForm.scss';

function CommentForm({commentInput, handleSubmit}) {
  
    return (
        <div className="comments__form-wrap">
         
        <h5 className="comments__counter">{commentInput && commentInput.length} Comments</h5>
          <div className="avatar comments__avatar-form"></div>
            <form onSubmit={handleSubmit} className="comments__form" id="commentForm" method="" name="commentForm">
              <label htmlFor="commentInput">
                <h5 className="comments__label">JOIN THE CONVERSATION</h5>
                <textarea className="comments__input" id="commentInput" name="commentInput" placeholder="Add a new comment" required=""></textarea>
              </label>            
              <button className="comments__button" id="commentBtn" type="submit">COMMENT</button>
            </form>
          </div> 
    )
}
export default CommentForm
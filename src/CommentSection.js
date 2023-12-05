import React, { useState, useEffect } from 'react';
import './CommentSection.css'; // Import CSS file


const Comment = ({ commenter, body, timestamp }) => (
  <div className="comment">
    <p><strong>{commenter}</strong></p>
    <p>{body}</p>
    <p>{new Date(timestamp).toLocaleString()}</p>
  </div>
);

const CommentList = ({ comments }) => (
  <div className="comment-list">
    {comments.map((comment, index) => (
      <Comment
        key={index}
        commenter={comment.commenter}
        body={comment.body}
        timestamp={comment.timestamp}
      />
    ))}
  </div>
);

const CommentForm = ({ onAddComment }) => {
  const [commenter, setCommenter] = useState('');
  const [body, setBody] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    const timestamp = Date.now();
    onAddComment({ commenter, body, timestamp });
    setCommenter('');
    setBody('');
  };

  useEffect(() => {
    document.title = "Gradient News Comment Page"; // Set the document title
  }, []);

  return (
    <form onSubmit={handleSubmit}>
      <input
        type="text"
        placeholder="Your Name"
        value={commenter}
        onChange={(e) => setCommenter(e.target.value)}
      />
      <textarea
        placeholder="Your Comment"
        value={body}
        onChange={(e) => setBody(e.target.value)}
      ></textarea>
      <button type="submit">Add Comment</button>
    </form>
  );
};

const CommentSection = () => {
  const [comments, setComments] = useState([]);

  const handleAddComment = (newComment) => {
    setComments([newComment, ...comments]);
  };

  return (
    <div className="comment-section">
      <h2>Reviews</h2>
      <CommentForm onAddComment={handleAddComment} />
      <CommentList comments={comments} />
      
    </div>
  );
};

export default CommentSection;
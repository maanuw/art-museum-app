import React, { useState } from "react";
import { useTranslation } from "react-i18next";
import "../styles/components/CommentSection.css";

function CommentSection() {
  const [t] = useTranslation();
  const [comments, setComments] = useState([]);
  const [newName, setNewName] = useState("");
  const [newComment, setNewComment] = useState("");

  const handleAddComment = () => {
    if (newName.trim() !== "" && newComment.trim() !== "") {
      const newCommentObject = { name: newName, comment: newComment };
      const updatedComments = [...comments, newCommentObject];
      setComments(updatedComments);
      setNewName("");
      setNewComment("");
    }
  };

  return (
    <div className="comment-section">
      <h2>{t('Comment.comments')}</h2>
      <div className="comment-list">
        {comments.map((comment, index) => (
          <div key={index} className="comment">
            <p>
              <strong>{comment.name}</strong>: {comment.comment}
            </p>
          </div>
        ))}
      </div>
      <div className="comment-input">
        <input
          type="text"
          placeholder={t('Comment.name')}
          value={newName}
          onChange={(e) => setNewName(e.target.value)}
        />
        <textarea
          rows="4"
          cols="50"
          placeholder={t('Comment.text')}
          value={newComment}
          onChange={(e) => setNewComment(e.target.value)}
        />
        <button onClick={handleAddComment}>{t('Comment.add')}</button>
      </div>
    </div>
  );
};

export default CommentSection;

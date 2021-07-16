import React, { useState } from "react";
import { ReplyCollection } from "/imports/db/ReplyCollection";

export default function ReplyInput( {user} ) {
  const [reply, setReply] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!reply) return;

    ReplyCollection.insert({
      text: reply.trim(),
      email: user.username,
      createdAt: new Date(),
    });

    setReply("");
  };

  return (
    <div className="post-input-container">
      <form className="post-input-form" onSubmit={handleSubmit}>
        <textarea
          rows="8"
          cols="250"
          placeholder="Enter message"
          value={reply}
          onChange={(e) => setReply(e.target.value)}
        />
        <div className="post-input-button-container">
        <button className="post-input-button" type="submit">Post</button>
        </div>
      </form>
    </div>
  );
}

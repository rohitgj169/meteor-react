import React, { useState } from "react";
import { ReplyCollection } from "/imports/api/ReplyCollection";

export default function ReplyInput() {
  const [reply, setReply] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!reply) return;

    ReplyCollection.insert({
      text: reply.trim(),
      createdAt: new Date(),
    });

    setReply("");
  };

  return (
    <div>
      <form onSubmit={handleSubmit}>
        <input
          type="text"
          placeholder="Enter message"
          value={reply}
          onChange={(e) => setReply(e.target.value)}
        />
        <button type="submit">Post</button>
      </form>
    </div>
  );
}

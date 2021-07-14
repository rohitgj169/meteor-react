import React from "react";
import { useTracker } from "meteor/react-meteor-data";
import Reply from "./Reply";
import { ReplyCollection } from "/imports/api/ReplyCollection";

export const App = () => {
  const replies = useTracker(() => ReplyCollection.find({}).fetch());
  console.log(replies);
  return (
    <div>
      <h1>Welcome to Yo!</h1>
      <ul>
        {replies.map((reply) => {
          return <Reply key={reply._id} reply={reply} />;
        })}
      </ul>
    </div>
  );
};

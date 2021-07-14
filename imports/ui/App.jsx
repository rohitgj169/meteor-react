import React from "react";
import { useTracker } from "meteor/react-meteor-data";
import Reply from "./Reply";
import { ReplyCollection } from "/imports/api/ReplyCollection";
import ReplyInput from "./ReplyInput";
import LoginForm from "./LoginForm";

export const App = () => {
  const user = useTracker(() => Meteor.user());
  const replies = useTracker(() =>
    ReplyCollection.find({}, { sort: { createdAt: -1 } }).fetch()
  );
  return (
    <div>
      {user ? (
        <>
          <h1>Discussion Board</h1>
          <ReplyInput />
          <ul>
            {replies.map((reply) => {
              return <Reply key={reply._id} reply={reply} />;
            })}
          </ul>
        </>
      ) : (
        <LoginForm />
      )
      }
    </div>
  );
};

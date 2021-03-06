import { Meteor } from "meteor/meteor";
import React, { useState, useEffect } from "react";
import { useTracker } from "meteor/react-meteor-data";
import Reply from "./Reply";
import { ReplyCollection } from "/imports/db/ReplyCollection";
import ReplyInput from "./ReplyInput";
import UserAuth from "./UserAuth";

export const App = () => {

  const user = useTracker(() => Meteor.user());

  const logout = () => Meteor.logout();

  const replies = useTracker(() =>
    ReplyCollection.find({}, { sort: { createdAt: -1 } }).fetch()
  );

  return (
    <div className="app-container">
      {user ? (
        <>
          <div className="navbar-container">
            <div className="title-container">
              <h2>Discussion Board</h2>
            </div>
            <div className="user-container" onClick={logout}>
              Logout
            </div>
          </div>
          <ReplyInput user={user} />
          <ul>
            {replies.length ? (
              replies.map((reply) => {
                return <Reply key={reply._id} reply={reply} />;
              })
            ) : (
              <div className="posts-status">No posts</div>
            )}
          </ul>
        </>
      ) : (
        <UserAuth />
      )}
    </div>
  );
};

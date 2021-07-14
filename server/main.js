import { Meteor } from "meteor/meteor";
import { ReplyCollection } from "/imports/api/ReplyCollection";

const newReply = (replyText) => ReplyCollection.insert({ text: replyText });

Meteor.startup(() => {
  if (ReplyCollection.find().count() === 0) {
    ["First", "Second"].forEach(newReply);
  }
});

import { Meteor } from "meteor/meteor";
import { Accounts } from "meteor/accounts-base";
import { ReplyCollection } from "/imports/db/ReplyCollection";

const newReply = (replyText, user) =>
  ReplyCollection.insert({
    reply: replyText,
    userId: user._id,
  });

const SEED_USERNAME = "rohit";
const SEED_PASSWORD = "password";

Meteor.startup(() => {
  if (!Accounts.findUserByUsername(SEED_USERNAME)) {
    Accounts.createUser({
      username: SEED_USERNAME,
      password: SEED_PASSWORD,
    });
  }
  // if (ReplyCollection.find().count() === 0) {
  //   ["First", "Second"].forEach(newReply);
  // }
});

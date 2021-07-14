import { Meteor } from "meteor/meteor";
import { Accounts } from "meteor/accounts-base";
import { ReplyCollection } from "/imports/api/ReplyCollection";

const newReply = (replyText) => ReplyCollection.insert({ reply: replyText });

const SEED_USERNAME = "rohit";
const SEED_PASSWORD = "password";

Meteor.startup(() => {
  if (!Accounts.findUserByUsername(SEED_USERNAME)) {
    Accounts.createUser({
      username: SEED_USERNAME,
      password: SEED_PASSWORD,
    });
  }
});

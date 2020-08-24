const Pusher = require("pusher");
const keys = require("../config/keys");

const pusher = new Pusher({
  appId: keys.pusherAppId,
  key: keys.pusherAppKey,
  secret: keys.pusherSecret,
  cluster: keys.pusherCluster,
  useTLS: true,
});

module.exports = pusher;

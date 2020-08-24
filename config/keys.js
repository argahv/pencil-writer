// figure out what credentials to use

if (process.env.NODE_ENV === "production") {
  module.exports = require("./prod");
} else {
  module.exports = require("./dev");
}

// 519763415950-gtsspifmjlumfntrg464bu3619r7p07o.apps.googleusercontent.com
// QOGSgQHwCEYqX-AdpttD_JNI

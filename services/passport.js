const passport = require("passport");
const GoogleStrategy = require("passport-google-oauth20").Strategy;
const FacebookStrategy = require("passport-facebook").Strategy;
const mongoose = require("mongoose");
const keys = require("../config/keys");

const User = mongoose.model("users");

passport.serializeUser((user, done) => {
  done(null, user.id);
});

passport.deserializeUser((id, done) => {
  User.findById(id).then((user) => {
    done(null, user);
  });
});

passport.use(
  new GoogleStrategy(
    {
      clientID: keys.googleClientID,
      clientSecret: keys.googleClientSecret,
      callbackURL: "/auth/google/callback",
      proxy: true,
    },
    async (accessToken, refreshToken, profile, done) => {
      const { name, sub: googleId, picture, email } = profile._json;
      const existingUser = await User.findOne({ userId: googleId });
      if (existingUser) {
        // we alreary have the same user
        return done(null, existingUser);
      }
      // make a new record
      const user = await new User({
        userId: googleId,
        userName: name,
        userImage: picture,
        email,
      }).save();
      done(null, user);
    }
  )
);

passport.use(
  new FacebookStrategy(
    {
      clientID: keys.fbClientId,
      clientSecret: keys.fbClientSecret,
      callbackURL: "/auth/facebook/callback",
      profileFields: ["email", "name", "picture"],
    },
    async (accessToken, refreshToken, profile, done) => {
      const { id, last_name, email, picture, first_name } = profile._json;
      const existingUser = await User.findOne({ userId: id });
      if (existingUser) {
        // we alreary have the same user
        return done(null, existingUser);
      }
      // make a new record
      const user = await new User({
        userId: id,
        email,
        userName: `${first_name} ${last_name}`,
        userImage: picture.data.url,
      }).save();
      done(null, user);
    }
  )
);

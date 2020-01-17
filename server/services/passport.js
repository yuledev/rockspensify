const passport = require("passport");
const mongoose = require("mongoose");
const FacebookStrategy = require("passport-facebook").Strategy;
const keys = require("../config/keys");
require("../models/User");
const User = mongoose.model("users");

passport.serializeUser((user, done) => {
  done(null, user.id);
});

passport.deserializeUser((id, done) => {
  User.findById(id).then(user => done(null, user));
});

passport.use(
  new FacebookStrategy(
    {
      clientID: keys.facebookClientID,
      clientSecret: keys.facebookClientSecret,
      callbackURL: "/auth/facebook/callback",
      profileFields: ["id", "displayName", "email", "photos"],
      proxy: true
    },
    async (accessToken, refreshToken, profile, done) => {
      const allowedEmails = keys.allowedEmails.split(";");
      if (allowedEmails.includes(profile.emails[0].value)) {
        const existingUser = await User.findOne({ facebookId: profile.id });

        if (existingUser) {
          return done(null, existingUser);
        }

        const picture = `https://graph.facebook.com/${profile.id}/picture?width=200&height=200`;

        const user = await new User({
          facebookId: profile.id,
          name: profile.displayName,
          email: profile.emails[0].value,
          picture
        }).save();
        done(null, user);
      } else {
        done(null, null);
      }
    }
  )
);

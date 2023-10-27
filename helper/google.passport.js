const passport = require('passport');

var GoogleStrategy = require('passport-google-oauth20').Strategy;

passport.use(new GoogleStrategy({
    clientID: "85592513106-rgpnsq18l1754247rc73lq7a77kbtne4.apps.googleusercontent.com",
    clientSecret:"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",
    callbackURL: "http://localhost:8090/auth/google/callback"
}))


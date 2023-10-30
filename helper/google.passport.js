// const passport = require("passport")

const googleS=require("passport-google-oauth20").Strategy

const google=(passport)=>{
    passport.use(new googleS({
        clientID: '138381389603-buq9a7mu4c41ulriikkq0rdlrrtb63nn.apps.googleusercontent.com',
        clientSecret: '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',
        callbackURL: "http://localhost:8090/"
    },(accessToken, refreshToken, profile, cb)=>{
        cb(null,profile)
    }))
    passport.serializeUser((user,done)=>{
        done(null,user)
    })

    passport.deserializeUser((user,done)=>{
        done(null,user)
    })
}

module.exports=google
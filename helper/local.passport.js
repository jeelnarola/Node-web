// const model = require("../Models/user.Schema")

const model = require("../Models/user.schema")

const localS=require("passport-local").Strategy

const local=(passport)=>{

    passport.use(new localS({usernameField:"email"},async(email,password,done)=>{
        let data=await model.findOne({email:email})
        if(!data){
            return done(null,false)
        }
        if(data.password!=password){
            return done(null,false)
        }
        return done(null,data)
    }))

    passport.serializeUser((data,done)=>{
        return done(null,data.id)
    })
    passport.deserializeUser(async(id,done)=>{
        let data=await model.findById(id)
        return done(null,data)
    })

}
module.exports=local
const {Router}=require('express')
const {signup, login, forget, patch, google, reset, resetp, profile} = require('../controller/user.controller')
const {signupM, isAuth} = require('../middleware/signup.middleware')
const passport = require('passport')

const router=Router()

router.get("/",(req,res)=>{
    res.render("index")
})
router.get("/signup",(req,res)=>{
    res.render("signup")
})
router.get("/login",(req,res)=>{
    res.render("login")
})
router.post('/signup',signupM,signup)

router.post("/login",passport.authenticate('local',{successRedirect:"/",failureRedirect:"/login"}))

router.post("/forget",forget)

router.get("/forget/:id",patch)

router.get('/auth/google/',passport.authenticate('google',{scope : ['profile']}))

router.get('/auth/google/callback',google);

router.get('/reset',isAuth,reset)

router.post('/reset',resetp)

router.get("/profile",isAuth,profile)

module.exports=router
const {Router}=require('express')
const {signup, login, forget} = require('../controller/user.controller')
const signupM = require('../middleware/signup.middleware')

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

router.post("/login",login)

router.post("/forget",forget)

module.exports=router
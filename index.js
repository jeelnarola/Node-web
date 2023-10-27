const express= require('express')
const router = require('./Routes/user.route');
const data = require('./Config/db');
// const data=require('./Config/db')
const passport=require('passport')
const session=require('express-session')

const app=express()
app.use(express.json())
app.use(express.urlencoded({extended:true}))
app.set('view engine', 'ejs');
app.set("viwes",__dirname+"/Viwes")
app.use(express.static(__dirname + '/Public'))
app.use(router)
app.use(session({secret:"Signup"}))
app.use(passport.initialize())
app.use(passport.session())
let port=8090

app.listen(port,()=>{
    console.log("server start");
  data()
})
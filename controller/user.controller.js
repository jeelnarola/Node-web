const model = require("../Models/user.schema")

const signup=async(req,res)=>{
    
    let data=await model.create(req.body)
    res.render("login")
}

const login=async(req,res)=>{
    res.send('login')
}
let id=-1

const forget=async(req,res)=>{
    let {email}=req.body
    let data=await model.findOne({email:email})
    if(!data){
        res.send("not match")
    }
    if(data){
        id=data.id
    }
   if(data){
    console.log(id);
    res.render("pass")

   }
}


const patch=async(req,res)=>{
    let {password}=req.body
    let data=await model.findById(id)
    let dat= await model.findByIdAndUpdate({password:password})
    res.send(dat)
}

const google=(req,res)=>{
    passport.authenticate('google', { failureRedirect: '/login' }),
  function(req, res) {
    // Successful authentication, redirect home.
    res.redirect('/');
  }
}

const reset=(req,res)=>{
    res.render('reset')
}

const resetp=async(req,res)=>{
    let {oldpass,newpass}=req.body
    console.log(oldpass,newpass);

    if(req.user.password==oldpass){
        let data=await model.findByIdAndUpdate(req.user.id,{password:newpass})
        res.render("index")
    }
}

const profile=(req,res)=>{
    if(req.user){
        res.redirect('profile',{user:req.user})
    }else{
        res.redirect('login')
    }
}
module.exports={signup,login,forget,patch,login,google,reset,resetp,profile}
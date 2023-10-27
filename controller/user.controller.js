const model = require("../Models/user.schema")

const signup=async(req,res)=>{
    
    let data=await model.create(req.body)
    res.render("login")
}

const login=async(req,res)=>{
    let data=await model.findOne({email:req.body.email})
    if(!data)
    {res.send("not found")
    }
    let password= await model.findOne({password:req.body.password})
    if(!password){
        res.send("not match")
    }
    res.render('index')
}

const forget=async(req,res)=>{
    let {email}=req.body
    let data=await model.find((user)=>user.email==email)
    res.send(data)
}

module.exports={signup,login,forget}
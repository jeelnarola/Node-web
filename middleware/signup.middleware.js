const signupM=async(req,res,next)=>{

    let {email,firstname,lastname,password}=req.body
    if(email&&firstname&&lastname&&password){
        next()
    }
    else{
        res.send("inputfile")
    }
}

const isAuth=(req,res,next)=>{

    if(req.user){
        next()
    }
    else{
        res.redirect("login")
    }

}


module.exports={signupM,isAuth}
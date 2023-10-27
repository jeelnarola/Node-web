const signupM=async(req,res,next)=>{

    let {email,firstname,lastname,password}=req.body
    if(email&&firstname&&lastname&&password){
        next()
    }
    else{
        res.send("inputfile")
    }
}



module.exports=signupM
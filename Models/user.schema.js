const monoose=require("mongoose")

const user=new monoose.Schema({
    firstname:String,
    lastname:String,
    email:String,
    password:String
})

const  model=monoose.model("user",user)

module.exports=model
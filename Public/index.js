

document.getElementById("checkbox").addEventListener("click",(e)=>{

    e.preventDefault()
    let pass=document.getElementById("login-password")
    if(pass.type==="password"){
        pass.type="text"
    }
    else{
        pass.type="password"
    }
})
document.getElementById("for").addEventListener("click",(e)=>{
    e.preventDefault()
    document.getElementById("forget").style.display="block"
})
// document.getElementById("f-f").addEventListener("submit",(e)=>{
//     e.preventDefault()
//     let email=document.getElementById("f-e").value
//     fetch('http://127.0.0.1:8090/my/user')
//     .then((res)=>res.json())
//     .then((data)=>console.log(data))
//     console.log(data);
   
// })
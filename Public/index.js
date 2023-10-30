

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
//     if(email){
//         document.getElementById("pass").style.display="block"
//         document.getElementById("forget").style.display="none"
//     }
// // 
// })
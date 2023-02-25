const open = document.querySelector("#open"), 
      close = document.querySelector("#close"), 
      passwInput = document.querySelector("#passw");
const glas = document.querySelector(".glas");


close.addEventListener("click", ()=>{
    close.style.display = "none"
})
function name(){
    if(passwInput.type == "password"){
        passwInput.type = 'text';
        open.style.display = "block";
        close.style.display = "none";
    }else{
        passwInput.type = 'password';
        open.style.display = "none";
        close.style.display = "block";
    }
}



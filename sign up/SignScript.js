const Form = document.querySelector("form"), 
    container = document.querySelector(".container")
    Name = Form.querySelector(".input_name"),
    input_fullName = document.querySelector(".input_fullName"),
    full = document.querySelector(".full"),
    email =  document.querySelector(".input_email"),
    inputEmail = document.querySelector(".Email_in"),
    CreatPas = document.querySelector(".input_password"),
    inputCetPasswor = document.querySelector(".CreatPasword"),
    ConfrimPas = document.querySelector(".input_Cpassword"),
    inputConfrimPas = document.querySelector(".ConfirmPassw");

function checkEmail(){
    const emailpattern = /T^[^ ]+@[^ ]+\. [a-z]{2,3]$/;
    if(!inputEmail.value.match(emailpattern)){
        email.classList.add("show");
    }
    else{
        email.classList.remove("show");
    }
}

Form.addEventListener("submit", (e)=>{
    e.preventDefault();
    checkEmail();
});
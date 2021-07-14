const form = document.querySelector("form");
eField = form.querySelector(".email"),
eInput = eField.querySelector("input"),
uField = form.querySelector(".user"),
uInput = uField.querySelector("input");

form.onsubmit = (e)=>{
  e.preventDefault(); //preventing from form submitting
  //if email and password is blank then add shake class in it else call specified function
  (eInput.value == "") ? eField.classList.add("shake", "error") : checkEmail();

  if (uInput.value == ""){
    uField.classList.add("error");
  }


  eInput.onkeyup = ()=>{checkEmail();} //calling checkEmail function on email input keyup
  //calling checkPassword function on pass input keyup

  function checkEmail(){ //checkEmail function
    let pattern = /^[^ ]+@[^ ]+\.[a-z]{2,3}$/; //pattern for validate email
    if(!eInput.value.match(pattern)){ //if pattern not matched then add error and remove valid class
      eField.classList.add("error");
      eField.classList.remove("valid");
      let errorTxt = eField.querySelector(".error-txt");
      //if email value is not empty then show please enter valid email else show Email can't be blank
      (eInput.value != "") ? errorTxt.innerText = "Enter a valid email address" : errorTxt.innerText = "Email can't be blank";
    }else{ //if pattern matched then remove error and add valid class
      eField.classList.remove("error");
      eField.classList.add("valid");
    }
  }


  //if eField and pField doesn't contains error class that mean user filled details properly
  if(!eField.classList.contains("error")){
    document.querySelector(".c1").classList.add("hide");
    document.querySelector(".c2").classList.remove("hide");
    document.querySelector(".msg").innerHTML = "Thanks "+uInput.value+" for your interest. We have <strong>requested admin</strong> to verify and approval. Watchout your email for welcome email with magic link for us"; //redirecting user to the specified url which is inside action attribute of form tag
  }
}

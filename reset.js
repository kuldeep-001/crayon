const form = document.querySelector("form");
eField = form.querySelector(".email"),
eInput = eField.querySelector("input"),
pField = form.querySelector(".password"),
pInput = pField.querySelector("input");

form.onsubmit = (e)=>{
  e.preventDefault(); //preventing from form submitting
  //if email and password is blank then add shake class in it else call specified function
  (eInput.value == "") ? eField.classList.add("shake", "error") : checkEmail();
  (pInput.value == "") ? pField.classList.add("shake", "error") : checkPass();

  eInput.onkeyup = ()=>{checkEmail();} //calling checkEmail function on email input keyup
  pInput.onkeyup = ()=>{checkPass();} //calling checkPassword function on pass input keyup

  function checkEmail(){ //checkEmail function
    let pattern = /^(?=.*[A-Z])[a-zA-Z]{5,}$/; //pattern for validate email
    if(!eInput.value.match(pattern)){ //if pattern not matched then add error and remove valid class
      eField.classList.add("error");
      eField.classList.remove("valid");
      let errorTxt = eField.querySelector(".error-txt");
      //if email value is not empty then show please enter valid email else show Email can't be blank
      (eInput.value != "") ? errorTxt.innerText = "Atleast one uppercase letter and length>=5" : errorTxt.innerText = "Password can't be blank";
    }else{ //if pattern matched then remove error and add valid class
      eField.classList.remove("error");
      eField.classList.add("valid");
    }
  }

  function checkPass(){ //checkPass function
    let patter = /^(?=.*[A-Z])(?=.*[^a-zA-Z])$/;

    if(pInput.value == ""){ //if pass is empty then add error and remove valid class
      pField.classList.add("error");
      pField.classList.remove("valid");
    }
    else if(pInput.value != eInput.value){ //if pattern not matched then add error and remove valid class
      pField.classList.add("error");
      pField.classList.remove("valid");
      let errorTxt = pField.querySelector(".error-txt");
      //if email value is not empty then show please enter valid email else show Email can't be blank
      (pInput.value != "") ? errorTxt.innerText = "Should be equal to new password" : errorTxt.innerText ="Re-Enter Password";
    }else{ //if pass is empty then remove error and add valid class
      pField.classList.remove("error");
      pField.classList.add("valid");
    }
  }

  //if eField and pField doesn't contains error class that mean user filled details properly
  if(!eField.classList.contains("error") && !pField.classList.contains("error")){
    document.querySelector(".c1").classList.add("hide");
    document.querySelector(".c2").classList.remove("hide"); //redirecting user to the specified url which is inside action attribute of form tag
  }
}

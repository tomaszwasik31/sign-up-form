let password = document.getElementById("password");
let confirm_password = document.getElementById("confirm_password");

let error_msg = document.getElementById("error_msg");

function validatePassword() {
  if (password.value != confirm_password.value) {
    confirm_password.setCustomValidity("Passwords Don't Match");
    confirm_password.style="outline-color:red;"
    password.style="border-color:red;"
    error_msg.style="visibility: visible;"
  } else {
    confirm_password.setCustomValidity("");
  }
}


confirm_password.onblur = validatePassword;

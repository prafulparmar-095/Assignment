function togglePasswordVisibility() {
    let passwordInput = document.querySelector("#passwordInput");
   let showPassword = document.querySelector("#PasswordCheckbox");
  if (passwordInput.type === "password") {
      passwordInput.type = "text";
      showPassword.textContent = "Hide password";
    } else {
    passwordInput.type = "password";
    showPassword.textContent = "Show password";
    } 
   }
const signUp = document.getElementById("signupBtn");
const signIn = document.getElementById("signinBtn");
const title = document.getElementById("title");
const nameField = document.getElementById("nameField");

signIn.addEventListener("click", function () {
  nameField.style.maxHeight = "0";
  title.innerHTML = "Sign In";
  signUp.classList.add("disable");
  signIn.classList.remove("disable");
});
signUp.addEventListener("click", function () {
  nameField.style.maxHeight = "65px";
  title.innerHTML = "Sign Up";
  signUp.classList.remove("disable");
  signIn.classList.add("disable");
});

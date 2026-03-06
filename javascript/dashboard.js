console.log("Javascript loaded.");

var username = "chewy42";
var password = "washington";

var isLoggedIn = false;

var signInButton = document.getElementById("sign-in-button");
var signOutButton = document.getElementById("sign-out-button");

var popupContainer = document.getElementById("popup-container");

var usernameInput = document.getElementById("username-input");
var passwordInput = document.getElementById("password-input");
var submitButton = document.getElementById("popup-sign-in-button")
var popupForm = document.getElementById("popup-form")

var dashboardContainer = document.getElementById("dashboard-container");

signInButton.addEventListener("click", function() {
  popupContainer.style.display = "flex";
})

popupForm.addEventListener("submit", function(event) {
  event.preventDefault();

  var isUsernameCorrect = usernameInput.value === username;
  var isPasswordCorrect = passwordInput.value === password;

  if (isUsernameCorrect && isPasswordCorrect) {
    popupContainer.style.display = "none";
    dashboardContainer.style.display = "flex";
    signInButton.style.display = "none";
    signOutButton.style.display = "flex";
  } else {
    alert("Incorrect username or password.");
  }
  
  console.log("Form submitted.")
})

signOutButton.addEventListener("click", function(){
  dashboardContainer.style.display = "none";
  signOutButton.style.display = "none"
  signInButton.style.display = "flex";
})
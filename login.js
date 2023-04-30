// Password toggle function
function togglePassword(passwordInputId) {
    var passwordInput = document.getElementById(passwordInputId);
    var showPassword = document.querySelector(".show-password");
    if (passwordInput.type === "password") {
        passwordInput.type = "text";
        showPassword.textContent = "Hide";
    } else {
        passwordInput.type = "password";
        showPassword.textContent = "Show";
    }
}

// Form switch function
function switchForm() {
    var loginForm = document.getElementById("login-form");
    var signupForm = document.getElementById("signup-form");

    if (loginForm.style.display === "none") {
        loginForm.style.display = "block";
        signupForm.style.display = "none";
    } else {
        loginForm.style.display = "none";
        signupForm.style.display = "block";
    }
}

// Login Form Validation
const loginForm = document.getElementById("login-form");
const loginEmail = document.getElementById("login-email");
const loginPassword = document.getElementById("login-password");

loginForm.addEventListener("submit", (e) => {
  e.preventDefault();
  
  if (!loginEmail.value || !loginPassword.value) {
    alert("Please fill in all fields.");
  } else if (!isValidEmail(loginEmail.value)) {
    alert("Please enter a valid email address.");
  } else {
    // Log in user
    alert("Login successful!");
    loginForm.reset();
  }
});

// Sign Up Form Validation
const signUpForm = document.getElementById("signup-form");
const signUpName = document.getElementById("signup-name");
const signUpEmail = document.getElementById("signup-email");
const signUpPassword = document.getElementById("signup-password");

signUpForm.addEventListener("submit", (e) => {
  e.preventDefault();
  
  if (!signUpName.value || !signUpEmail.value || !signUpPassword.value) {
    alert("Please fill in all fields.");
  } else if (!isValidEmail(signUpEmail.value)) {
    alert("Please enter a valid email address.");
  } else if (signUpPassword.value.length < 6) {
    alert("Password must be at least 6 characters long.");
  } else {
    // Sign up user
    alert("Sign up successful!");
    signUpForm.reset();
  }
});

// Email Validation Function
function isValidEmail(email) {
  const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  return emailRegex.test(email);
}

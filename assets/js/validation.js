let username = document.getElementById("username");
let email = document.getElementById("email");
let password = document.getElementById("password");
// login function
function login() {
  let names = localStorage.getItem("name");
  let passwords = localStorage.getItem("password");

  if (names == username.value && passwords == password.value) {
    localStorage.setItem("code", "logged in");
    window.location.href = "../index.html";
  } else {
    alert("Wrong information");
  }
}
// logout function
function logout() {
  localStorage.setItem("code", "logged out");
  window.location.href = "html/login.html";
}

// validation function

function validateForm() {
  var pass =
    /^(?=.*\d)(?=.*[a-z])(?=.*[A-Z])(?=.*[^a-zA-Z0-9])(?!.*\s).{8,15}$/;
  if (username.value == null || username.value == "") {
    document.getElementById("userNameError").innerText = "User name is empty!";
  }
  if (username.value.length < 6) {
    document.getElementById("userNameError").innerText = "User name is short!";
  }
  if (password.value.match(pass)) {
  }
  if (!password.value.match(pass)) {
    document.getElementById("userPassError").innerText = "Pass name is empty!";
  }
  if (/^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/.test(email.value)) {
  }
  if (!/^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/.test(email.value)) {
    document.getElementById("userEmailError").innerText =
      "You have entered an invalid email address!";
  } else {
    signUP();
  }
}
// sign up function
function signUP() {
  localStorage.setItem("name", username.value);
  localStorage.setItem("email", email.value);
  localStorage.setItem("password", password.value);

  window.location.href = "login.html";
}
// update function
function updateUser() {
  let name = document.getElementById("updatePass");
  let pass = document.getElementById("updateName");
  localStorage.setItem("name", name.value);
  localStorage.setItem("password", pass.value);
  document.getElementById("UpdateMessage").innerText = "Updated";
}

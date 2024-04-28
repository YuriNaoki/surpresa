// Function to check the password
const correctPassword = "123";
const redirectUrl = "/index.html";

function checkPassword() {
  const password = document.getElementById("password").value;
  if (password === correctPassword) {
	localStorage.setItem("passwordEntered", true);
	window.location.href = redirectUrl;
  } else {
	alert("Incorrect password");
  }
}

// Check if the user has already entered the password
if (localStorage.getItem("passwordEntered")) {
  window.location.href = redirectUrl;
}


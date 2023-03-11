function signUp() {
  // Get the values of the username, email, and password fields
  const username = document.getElementById("name").value;
  const email = document.getElementById("email").value;
  const password = document.getElementById("password").value;
  const password2 = document.getElementById("password2").value;

  // Set up regular expressions to match the email and password formats
  const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

  // Check that the email and password meet the required format
  if (!emailRegex.test(email)) {
    alert("Invalid email address");
    return false;
  }
  if (password != password2){
    alert("Passwords must match!");
    return false;
  }
  // If the email and password meet the required format, save them locally along with the username
  localStorage.setItem("username", username);
  localStorage.setItem("email", email);
  localStorage.setItem("password", password);

  // Return true to indicate successful sign up and local storage of user data
  window.location.href = "index.html";

  return true;
}

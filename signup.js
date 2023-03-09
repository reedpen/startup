function signUp() {
  // Get the values of the username, email, and password fields
  const username = document.getElementById("username").value;
  const email = document.getElementById("email").value;
  const password = document.getElementById("password").value;

  // Set up regular expressions to match the email and password formats
  const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  const passwordRegex = /^(?=.*[A-Za-z])(?=.*\d)[A-Za-z\d]{8,}$/;

  // Check that the email and password meet the required format
  if (!emailRegex.test(email)) {
    alert("Invalid email address");
    return false;
  }
  if (!passwordRegex.test(password)) {
    alert("Password must be at least 8 characters long and contain at least one letter and one number");
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

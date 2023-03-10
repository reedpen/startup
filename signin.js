function validateLogin() {
    // Get the values of the email and password fields
    const email = document.getElementById("email").value;
    const password = document.getElementById("password").value;
  
    // Set up a regular expression to match the email format
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  
    // Check that the email and password meet the required format
    if (!emailRegex.test(email)) {
      alert("Invalid email address");
      return false;
    }
    if (password.length < 8) {
      alert("Password must be at least 8 characters long");
      return false;
    }
  
    // If the email and password meet the required format, save them locally
    localStorage.setItem("email", email);
    localStorage.setItem("password", password);
  
    // Return true to indicate successful login validation and local storage of login data
    window.location.href = "index.html";

    return true;
  }
  
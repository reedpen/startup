function signup() {
    const name = document.querySelector("#name");
    const email = document.querySelector("#name");
    const pswrd = document.querySelector("#name");
    const pswrd2 = document.querySelector("#name");
    localStorage.setItem("name", name.value);
    localStorage.setItem("email", email.value);
    if (pswrd.value === pswrd2.value ){
      localStorage.setItem("password", pswrd.value);
      window.location.href = "index.html";
    }


  }
  
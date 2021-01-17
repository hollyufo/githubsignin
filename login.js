function conpass() {
  // entered data from the login-form
  var userid = document.getElementById("userid");
  var userPw = document.getElementById("pass");
  var userconPw = document.getElementById("compass");
  //here to check if the password match
  if (userPw.value != userconPw.value) {
    alert("your password dont match");
  } else if (userPw.value == userconPw.value) {
    console.log("right");

    localStorage.setItem("n1", userid.value);
    localStorage.setItem("p1", userPw.value);
    location.href = "login.html";

    // setTimeout(function () {
    //   window.location.href = "login.html";
    // }, 700);
  }
}

function check() {
  // stored data from the register-form
  var storedN1 = localStorage.getItem("n1");
  var storedP1 = localStorage.getItem("p1");

  // entered data from the login-form
  var userName = document.getElementById("userid");
  var userPw = document.getElementById("pass");

  // check if stored data from register-form is equal to data from login form
  if (userName.value !== storedN1 || userPw.value !== storedP1) {
    alert("ERROR");
  } else {
    // setTimeout(function () {
    //   window.location.href = "lastpage.html";
    // }, 700);
    window.location.href = "lastpage.html";
  }
}

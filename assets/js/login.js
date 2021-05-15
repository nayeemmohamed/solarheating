var username;
var password;
function login() {
  username = document.getElementById("username").value;
  password = document.getElementById("password").value;
  if (username === credentials.user && password === credentials.pass) {
    swal("Welcome To SolarHeating", "Succesfully Logged In", "success").then(
      (value) => {
        localStorage.clear();
        window.location = "index.html";
        //setting userid to localstorage for checking user logged in
        localStorage.setItem("userid","2021");
      }
    );
  } else if (username == "" || password == "") {
    swal("Warning!", "Please fill all fields to Login", "warning");
  } else {
    swal("Incorrect Credentials!", "Username or Password Incorrect", "error");
  }
}

//This function is for session timeout to login again
function clearAll(){
  setTimeout(function(){
    localStorage.clear();
    swal({
      title:"Session TimeOut!",
      text:"Please Login Again to use Website",
      type:"warning"
    }).then(function(){
      //redirect to login page
      window.location="login.html";
    });
  },60000*30);
}

function logout(){
  localStorage.clear();
  window.location="login.html";
}
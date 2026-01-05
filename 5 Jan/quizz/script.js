function login(){
  let u = document.getElementById("username").value;
  let p = document.getElementById("password").value;

  if(!u || !p){
    alert("Please enter username & password");
    return;
  }

  localStorage.setItem("user", u);
  window.location.href="quiz.html";
}

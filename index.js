let email = "hasnainashir2@gmail.com";
let password = "unify1230";
let validEmail = document.querySelector(".validEmail");
let loginBtn = document.querySelector("#loginBtn");
let InputEmail = document.querySelector("#InputEmail");
let InputPassword = document.querySelector("#InputPassword");

loginBtn.addEventListener("click", (e) => {
  if (InputEmail.value == email) {
    if (InputPassword.value == password) {
      location.replace("Admin.html");
    } else {
      alert("Password Invalid !");
      InputPassword.value = ""
    }
  } else {
    alert("Email Invalid !");
    location.replace("/");
  }
});


function logout() {
  location.replace("/");
}

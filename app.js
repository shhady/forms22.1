const form = document.querySelector("#signUp-form");
const Myname = document.querySelector("#name");
const Myage = document.querySelector("#age");
const Myemail = document.querySelector("#email");
const h1 = document.createElement("h1");
const h2 = document.createElement("h2");
const h3 = document.createElement("h3");
const h4 = document.createElement("h4");
const btn = document.createElement("button");
const div = document.querySelector("div");
const confirmed = document.createElement("confirmation");
const change = document.createElement("button");
div.appendChild(h1);
div.appendChild(h2);
div.appendChild(h3);
div.appendChild(h4);
div.appendChild(btn);
div.appendChild(confirmed);
div.appendChild(change);
form.addEventListener("submit", function (e) {
  e.preventDefault();
  console.log("name", Myname.value);
  console.log("age", Myage.value);
  console.log("email", Myemail.value);
  (h1.innerText = "Name: " + Myname.value),
    (h2.innerText = "Age: " + Myage.value),
    (h3.innerText = "Email: " + Myemail.value);
  h4.innerText = "please confirm your details";
  btn.innerText = "Confirm Details";
  change.innerText = "Change Details";
  //   document.body.appendChild(Myname.value, Myage.value, Myemail.value);
});

btn.addEventListener("click", function () {
  confirmed.innerText = "congratulations you successfully sent this form";
  change.style.display = "none";
});

change.addEventListener("click", function () {
  h1.innerText = "";
  h2.innerText = "";
  h3.innerText = "";
  h4.innerText = "please resubmit your details";
});

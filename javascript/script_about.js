// click

const popup = document.querySelector("#hamburger_popup");
const sectTwo = document.querySelector("#whoarewe_sect2");
let hamburgerToggler = false;

document.addEventListener("click", function (e) {
  let attributeCheck = e.target.hasAttribute("role");
  if (attributeCheck === false) {
    popup.style.top = "-100vh";
    hamburgerToggler = false;
  } else {
    let roleValue = e.target.getAttribute("role");
    switch (roleValue) {
      case "hamburger":
        if (hamburgerToggler === false) {
          popup.style.top = "0px";
          hamburgerToggler = true;
        }
        break;
      case "instagram":
        window.open("https:/www.instagram.com");
        break;
      case "twitter":
        window.open("https:/www.twitter.com");
        break;
      case "facebook":
        window.open("https:/www.facebook.com");
        break;
      case "read_more":
        sectTwo.scrollIntoView({ behavior: "smooth", block: "center" });
    }
  }
});

//body show

body = document.querySelector("body");

window.onload = function () {
  body.style.opacity = 1;
};

//time

let year = new Date().getFullYear();

document.querySelector(
  "#footer2 p"
).innerHTML = `Copyright &copy; ${year} All rights reserved.`;

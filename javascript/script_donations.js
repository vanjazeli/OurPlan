// click

const popup = document.querySelector("#hamburger_popup");
const sectTwo = document.querySelector("#donations_sect2");
const firstDropdown = document.querySelector("#first_dropdown");
const secondDropdown = document.querySelector("#second_dropdown");

let hamburgerToggler = false;
let firstToggler = false;
let secondToggler = false;
let firstSelected = false;
let secondSelected = false;

document.addEventListener("click", function (e) {
  let attributeCheck = e.target.hasAttribute("role");
  if (attributeCheck === false) {
    if (hamburgerToggler === true) {
      popup.style.top = "-100vh";
      hamburgerToggler = false;
    }
    if (firstToggler === true) {
      firstDropdown.style.display = "none";
      firstToggler = false;
    }
    if (secondToggler === true) {
      secondDropdown.style.display = "none";
      secondToggler = false;
    }
  } else {
    let roleValue = e.target.getAttribute("role");
    switch (roleValue) {
      case "hamburger":
        if (hamburgerToggler === false) {
          popup.style.top = "0px";
          hamburgerToggler = true;
        }
        break;
      case "first_select":
        if (firstToggler === false) {
          firstDropdown.style.display = "block";
          firstToggler = true;
        } else if (firstToggler === true) {
          firstDropdown.style.display = "none";
          firstToggler = false;
        }
        if (secondToggler === true) {
          secondDropdown.style.display = "none";
          secondToggler = false;
        }
        break;
      case "second_select":
        if (secondToggler === false) {
          secondDropdown.style.display = "block";
          secondToggler = true;
        } else if (secondToggler === true) {
          secondDropdown.style.display = "none";
          secondToggler = false;
        }
        if (firstToggler === true) {
          firstDropdown.style.display = "none";
          firstToggler = false;
        }
        break;

      case "one_time":
        document.querySelector("#first_select_box p").textContent = "One time";
        firstDropdown.style.display = "none";
        firstSelected = true;
        break;
      case "monthly":
        document.querySelector("#first_select_box p").textContent = "Monthly";
        firstDropdown.style.display = "none";
        firstSelected = true;
        break;

      case "$100":
        document.querySelector("#second_select_box p").textContent = "$100";
        secondDropdown.style.display = "none";
        secondSelected = true;

        break;
      case "$50":
        document.querySelector("#second_select_box p").textContent = "$50";
        secondDropdown.style.display = "none";
        secondSelected = true;

        break;
      case "$10":
        document.querySelector("#second_select_box p").textContent = "$10";
        secondDropdown.style.display = "none";
        secondSelected = true;

        break;

      case "donate":
        if (firstSelected === true && secondSelected === true) {
          alert("Thanks for donating!");
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

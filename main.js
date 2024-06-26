let list = document.getElementsByTagName("li");
let home = document.querySelector(".home");

function navigationClickStyle() {
  let arrayList = Array.from(list);
  arrayList.push(home);
  arrayList.forEach((li) => {
    li.addEventListener("click", function () {
      // first you should remove the class from all li:
      arrayList.forEach(function (ele) {
        ele.classList.remove("active");
      });

      arrayList.forEach(function (ele) {
        ele.style.color = "";
      });

      // then add the active class to the current li:
      this.classList.add("active");
      // change the color of the element .
      let activeElement = document.querySelector(".active");
      if (activeElement) {
        activeElement.style.color = "red";
      }
    });
  });
};

let inputName = document.querySelector("#name");
let inputEmail = document.querySelector("#email");
function formValidation() {
  document.forms[0].onsubmit = function (event) {
    let username = false;
    let useremail = false;
    const emailRegex = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;
    const nameRegex = /^[A-Za-z][A-Za-z0-9_]{7,29}$/;
    // check for the name that the user enter.
    if (
      inputName.value !== "" &&
      inputName.value.length <= 10 &&
      isNaN(inputName.value) &&
      inputName.value.match(nameRegex)
    ) {
      username = true;
    }
      // check for the email that user enter.
    if (inputEmail.value !== "" && inputEmail.value.match(emailRegex)) {
      useremail = true;
    }
    // stop the submit button if username and useremail are not valid.
    if (!username || !useremail) {
      event.preventDefault();
    }
  };
};

// call the functions.
navigationClickStyle();
formValidation();

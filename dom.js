// DOM
// callback function
// event ('click')
// anonimous function

const happyBtn = document.getElementById("button-happy");
const sadBtn = document.getElementById("button-sad");
const image = document.querySelector(".img");

happyBtn.addEventListener("click", function () {
  image.style.display = "inline";
  happyBtn.disabled = true;
  sadBtn.disabled = false;
});

sadBtn.addEventListener("click", function () {
  image.style.display = "none";
  happyBtn.disabled = false;
  sadBtn.disabled = true;
});

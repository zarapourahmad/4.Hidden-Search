"use strict";

const button = document.querySelector("button");
const input = document.querySelector("input");
const container = document.querySelector(".container");

button.addEventListener("click", function () {
  button.classList.toggle("moveRight");
  input.style.transition = "0.2s";
  input.classList.toggle("hide");
  input.focus();
});

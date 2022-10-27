"use strict";

const form = document.querySelector("form");
const crednr = document.querySelector("input[id=crednr]");
const month = document.querySelector("input[id=month]");
const year = document.querySelector("input[id=year]");
const button = document.querySelector("button");
const numbers = /^[0-9]+$/;

console.log(form.elements);

crednr.addEventListener("input", validate);
month.addEventListener("input", validateMonth);
year.addEventListener("input", validateYear);

function validate() {
  if (crednr.value.length > 15 && crednr.value.match(numbers)) {
    crednr.style.borderColor = "green";
    month.focus();
  } else if (crednr.value.length === 16 && !crednr.value.match(numbers)) {
    crednr.style.borderColor = "red";
    month.focus();
  }
  console.log(crednr.length);
}

function validateMonth() {
  if (month.value.length > 1 && month.value.match(numbers)) {
    month.style.borderColor = "green";
    year.focus();
  } else if (month.value.length > 1 && !month.value.match(numbers)) {
    month.style.borderColor = "red";
    year.focus();
  }
}

function validateYear() {
  if (year.value.length > 1 && year.value.match(numbers)) {
    year.style.borderColor = "green";
    button.focus();
  } else if (year.value.length > 1 && !year.value.match(numbers)) {
    year.style.borderColor = "red";
    setTimeout(() => {}, 2000);
  }
}

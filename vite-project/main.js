import "./style.css";
import isLeapYear from "leap-year";

document.querySelector("#submit").addEventListener("click", getYear);

document.querySelector("#year-input").addEventListener("input", updateText);

function updateText() {
  const inputYear = document.querySelector("#year-input").value;
  document.querySelector("#submitted-year").textContent = inputYear;
  document.querySelector("#result").textContent = "";
}

function getYear() {
  const inputYear = document.querySelector("#year-input").value;
  displayYear(inputYear);
}

function displayYear(inputYear) {
  const inputYearNumber = Number(inputYear);
  if (isLeapYear(inputYearNumber)) {
    document.querySelector("#result").textContent = "yes.";
    document.querySelector("#result").style.color = "#ACE1AF";
    document.querySelector("#result").style.textTransform = "uppercase";
  } else {
    document.querySelector("#result").textContent = "no.";
    document.querySelector("#result").style.color = "#E32636";
  }
}

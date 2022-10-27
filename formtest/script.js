"use strict";

const url = "https://kicccjzxkllqlhbuozqh.supabase.co/rest/v1/tvshows";
const headers = {
  apikey:
    "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6ImtpY2Njanp4a2xscWxoYnVvenFoIiwicm9sZSI6ImFub24iLCJpYXQiOjE2NjY1OTg3MjYsImV4cCI6MTk4MjE3NDcyNn0.0fy2lU1BbfgzXVllYJiYei1pl2Pua6RR9ndixISNEXU",
  Authorization:
    "Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6ImtpY2Njanp4a2xscWxoYnVvenFoIiwicm9sZSI6ImFub24iLCJpYXQiOjE2NjY1OTg3MjYsImV4cCI6MTk4MjE3NDcyNn0.0fy2lU1BbfgzXVllYJiYei1pl2Pua6RR9ndixISNEXU",
  "Content-Type": "application/json",
  Prefer: "return=representation",
};
const form = document.querySelector("form");
document.querySelector("input[type=range]").addEventListener("input", () => {
  document.querySelector(".rating").textContent =
    "You really give this a " + document.querySelector("input[type=range]").value + " rating?";
});

function addShow(newShow) {
  const options = {
    method: "POST",
    headers: headers,
    body: JSON.stringify(newShow),
  };

  fetch(url, options)
    .then((res) => res.json())
    .then((data) => {
      console.log(data);
    });
}

form.addEventListener("submit", (e) => {
  e.preventDefault();
  const show = {
    genres: form.elements.genres.value.split("\n"),
    seasons: form.elements.seasons.value,
    director: form.elements.director.value,
    rating: form.elements.rating.value,
    //the next line is essentially a an if statement
    ongoing: form.elements.ongoing.value === "yes" ? true : false,
    name: form.elements.name,
  };
  addShow(show);
});

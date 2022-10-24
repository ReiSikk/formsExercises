//importing from config.js
import { url, headers } from "./config.js";

async function getShows() {
  const options = {
    method: "GET",
    headers: headers,
  };

  const res = await fetch(url, options);
  const data = await res.json();
  return data;
}

function addShow() {
  const options = {
    method: "POST",
    headers: headers,
    body: '{"name":"Breaking Bad","seasons":2,"director":"Gareth Davies","rating":4.15,"ongoing":true}',
  };

  fetch(url, options)
    .then((res) => res.json())
    .then((data) => {
      showData();
    });
}

function deleteShow(id) {
  const options = {
    method: "DELETE",
    headers: headers,
  };

  fetch(url + `?id=eq.` + id, options)
    .then((response) => response.json())
    .then((response) => {
      showData();
    })
    .catch((err) => console.error(err));
}

async function init() {
  const button = document.querySelector(".addShow");
  button.addEventListener("click", addShow);
  showData();
}
async function showData() {
  const data = await getShows();
  console.log(data);
  //we shouldn't do this InnerHTML here because the user could be in the middle of enetering an email etc.
  document.querySelector("main").innerHTML = "";
  data.forEach((item) => {
    const template = document.querySelector("template").content;
    const copy = template.cloneNode(true);
    copy.querySelector("h2").textContent = item.name;
    copy.querySelector(".seasons").textContent = item.seasons;
    copy.querySelector(".director").textContent = item.director;
    const button = copy.querySelector("button");
    button.addEventListener("click", () => {
      deleteShow(item.id);
    });
    document.querySelector("main").appendChild(copy);
  });
}
init();

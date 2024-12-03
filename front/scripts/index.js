const tempData = require("./tempData.js");
const jstoHtmlCards = require("./jstoHtmlCards.js");
const axios = require("axios");
const { formReset, formSubmit } = require("./createMovieForm.js");

const cardsContainer = document.querySelector("#cardsContainer");

async function getMovies() {
  try {
    const { data } = await axios.get("http://localhost:3000/movies");
    const arrayMovies = data.data;
    const arrayHtmlCards = arrayMovies.map(jstoHtmlCards);
    arrayHtmlCards.forEach((elementHtml) =>
      cardsContainer.appendChild(elementHtml)
    );
  } catch (error) {
    alert("Error in the API");
    const arrayHtmlCards = tempData.map(jstoHtmlCards);
    arrayHtmlCards.forEach((elementHtml) =>
      cardsContainer.appendChild(elementHtml)
    );
  }
}

if (window.location.pathname.endsWith("front/index.html")) {
  getMovies();
} else {
  const form = document.querySelector("form");
  if (window.location.pathname.endsWith("front/pages/form.html")) {
    formSubmit();
    formReset();
  }
}

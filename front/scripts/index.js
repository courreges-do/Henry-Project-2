const tempData = require("./tempData.js");
const jstoHtmlCards = require("./jstoHtmlCards.js");
const axios = require("axios");

const cardsContainer = document.querySelector("#cardsContainer")


async function getMovies(){
  try {
    const {data} = await axios.get("http://localhost:3000/movies")
    const arrayMovies = data.data
    const arrayHtmlCards = arrayMovies.map(jstoHtmlCards)
    arrayHtmlCards.forEach((elementHtml)=> cardsContainer.appendChild(elementHtml))
  } catch (error) {
    alert("Error en la API")
    const arrayHtmlCards = tempData.map(jstoHtmlCards)
    arrayHtmlCards.forEach( (elementHtml) => cardsContainer.appendChild(elementHtml))
  }
}

getMovies()



  
/*
const cardsContainer = document.querySelector("#cardsContainer")

function jstoHtmlCards(elementJS){
    const div = document.createElement("div")
    const h1 = document.createElement("h1")
    const button = document.createElement("button")
    const image = document.createElement("image")

    image.src =elementJS.poster
    image.classList.add("cardImage")
    image.alt = elementJS.title

    h1.innerHTML = elementJS.title
    button.innerHTML = "Watch Now"

    div.classList.add("card")
    div.appendChild(image)
    div.appendChild(h1)
    div.appendChild(button)

    return div
}

esto hay que comentarlo dsp de escribir el get

const arrayHtmlCards = tempData.map(jstoHtmlCards)

arrayHtmlCards.forEach( (elementHtml) => cardsContainer.appendChild(elementHtml))
esto...

$.get("https://students-api.up.railway.app/movies", (response) => {
    const arrayHtmlCards = response.map(jstoHtmlCards)
    arrayHtmlCards.forEach((elementHtml)=> cardsContainer.appendChild(elementHtml))
  });
  
  */
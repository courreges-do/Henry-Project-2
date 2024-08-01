 const cardsContainer = document.querySelector("#cardsContainer");

function jstoHtmlCards(elementJS){
    const div = document.createElement("div")
    const h1 = document.createElement("h1")
    const button = document.createElement("button")
    const img = document.createElement("img")

    img.src = elementJS.poster
    img.classList.add("cardImage")
    img.alt = elementJS.title

    h1.innerHTML = elementJS.title
    button.innerHTML = "Watch Now"

    div.classList.add("card")
    div.appendChild(img)
    div.appendChild(h1)
    div.appendChild(button)

    return div
}

module.exports = jstoHtmlCards;
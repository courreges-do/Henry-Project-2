 /*Selecciono el elemento del DOM con el id cardsContainer*/
const cardsContainer = document.querySelector("#cardsContainer")

/*Creo una función para crear tarjetas HTML con 4 elementos*/
function jstoHtmlCards(elementJS){
    const div = document.createElement("div")
    const h1 = document.createElement("h1")
    const button = document.createElement("button")
    const img = document.createElement("img")

/*Configuro los atributos src y alt y le añado una clase a la imagen*/
    img.src = elementJS.poster
    img.classList.add("cardImage")
    img.alt = elementJS.title

/*Agrego el contenido del h1 y del botón*/
    h1.innerHTML = elementJS.title
    button.innerHTML = "Watch Now"

/*Agrego la clase card al div y le appendeo o agrego la imagen, el título y el botón*/
    div.classList.add("card")
    div.appendChild(img)
    div.appendChild(h1)
    div.appendChild(button)

    return div
}

  
  $.get("https://students-api.up.railway.app/movies")
  .done( (data)  => {
    const arrayHtmlCards = data.map(jstoHtmlCards)
    arrayHtmlCards.forEach((elementHtml)=> cardsContainer.appendChild(elementHtml))
  })
  .fail( () => {
    alert("Error en la API")
    const arrayHtmlCards = tempData.map(jstoHtmlCards)
    arrayHtmlCards.forEach( (elementHtml) => cardsContainer.appendChild(elementHtml))
  });
 
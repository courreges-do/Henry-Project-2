const jstoHtmlCards = require("./jstoHtmlCards");

/*Realizo una solicitud GET a una API para obtener datos de películas y, si tiene éxito, 
genera y muestra tarjetas HTML con estos datos en un contenedor, 
y si falla, muestra un mensaje de error y usa datos temporales para generar las tarjetas HTML*/
  
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
 
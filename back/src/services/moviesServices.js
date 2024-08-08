const { dataBase } = require("../db/dbConfig")

function filterMoviesByTitle(title){
    const respuesta = dataBase.filter(producto => producto.title === title)
    return respuesta
}

function getMoviesService(){
    return dataBase
}

function createMoviesService(movie){
    dataBase.push(movie)
    return "movie created successfully"
}

module.exports = {
    filterMoviesByTitle,
    getMoviesService,
    createMoviesService
}
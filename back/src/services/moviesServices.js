const { Movie } = require("../models/Movie")

async function filterMoviesById(id){
    const movie = await Movie.findById(id)
    return movie
}

async function getMoviesService(){
    const movies = await Movie.find()
    return movies
}

function createMoviesService(movie){
    return "movie created successfully"
}




module.exports = {
    filterMoviesById,
    getMoviesService,
    createMoviesService
}
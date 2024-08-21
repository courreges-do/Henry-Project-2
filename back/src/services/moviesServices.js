const { Movie } = require("../models/Movie")

async function filterMoviesById(id){
    const movie = await Movie.findById(id)
    return movie
}

async function getMoviesService(){
    const movies = await Movie.find()
    return movies
}

async function createMoviesService(movie){
    const movieCreated = await Movie.create(movie);
    return movieCreated;
}




module.exports = {
    filterMoviesById,
    getMoviesService,
    createMoviesService
}
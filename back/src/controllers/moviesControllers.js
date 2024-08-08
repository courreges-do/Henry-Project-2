const { filterMoviesByTitle, getMoviesService, createMoviesService } = require("../services/moviesServices")

function getMoviesController(req, res){
    const { title } = req.query
    if(title){
        const respuesta = filterMoviesByTitle(title)
        return res.status(200).json({
            message: "showing dataBase information",
            data: respuesta
        })
    } else { 
        const respuesta = getMoviesService()
        return res.status(200).json({
        message: "showing dataBase information",
        data: dataBase
    })
    }
}
function createMoviesController(req, res){
    const respuesta = createMoviesService(req.body)
    res.status(200).json({
        message: "movie created successfully",
        data: respuesta
    })
}

module.exports = {
    getMoviesController,
    createMoviesController
}

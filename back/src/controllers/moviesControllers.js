const { filterMoviesById, getMoviesService, createMoviesService } = require("../services/moviesServices")

async function getMoviesController(req, res){
    const { id } = req.query
    try{
    if(id){
        const respuesta = await filterMoviesById(id)
        return res.status(200).json({
            message: "showing dataBase information",
            data: respuesta
        })
    } else { 
        const respuesta = await getMoviesService()
        return res.status(200).json({
            message: "showing dataBase information",
            data: respuesta
        })
    }
 } catch (error){
    return res.status(400).json({
        message: "there was an error in the app",
        error: error.message
    })
 }
}

async function createMoviesController(req, res){
    try{ 
    const respuesta = await createMoviesService(req.body);
    res.status(200).json({
        message: "movie created successfully",
        data: respuesta,
    });
  } catch (error) {
    return res.status(400).json({
        message: "there was an error in the app",
        error: error.message
    })
  }
}

module.exports = {
    getMoviesController,
    createMoviesController
}

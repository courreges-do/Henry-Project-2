const { Router } = require ("express")
const { getMoviesController, createMoviesController } = require ("../controllers/moviesControllers")
const { validatePostMoviesInfo } = require("../middlewares/index.js")

const router = Router();

router.get("/movies", getMoviesController)

router.post("/movies", validatePostMoviesInfo, createMoviesController)

module.exports = {
    router
}
function validatePostMoviesInfo(req, res, next){
    const fields = ["tile", "year", "director", "duration", "genre", "rate", "poster"]
    const filterFields = fields.filter((field)=> !req.body[field])

    if(filterFields.length > 0){
        res.status(400).json({
            message: "Information missing to create movie",
            data: filterFields
        })
    } else next()
}

module.exports = {
    validatePostMoviesInfo
}
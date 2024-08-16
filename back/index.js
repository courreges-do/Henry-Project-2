const { app } = require("./src/server.js")
const { dbCon } = require("./src/config/dbCon.js")

dbCon()
    .then( () => {
        app.listen(3000, () => {
            console.log("Server listening on port 3000")
        })  
    })
    .catch( (error) => {
        console.log(error)
    })



const { router } = require("./routes/index.js")
const express = require("express")

const app = express();

app.use(express.json());
app.use(router);

module.exports = {
    app
}
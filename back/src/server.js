const { router } = require("./routes/index.js")
const express = require("express")
const morgan = require("morgan")
const cors = require("cors")

const app = express();

app.use(express.json());
app.use(cors());
app.use(morgan("dev"));
app.use(router);

module.exports = {
    app
}
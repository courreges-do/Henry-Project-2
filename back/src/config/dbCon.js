require("dotenv").config()
const mongoose = require("mongoose");

const dbCon = async () => {
    await mongoose.connect(
        `mongodb+srv://${process.env.DB_USER}:${process.env.DB_PASSWORD}@${process.env.DB_CLUSTER}.hqfpvd2.mongodb.net/${process.env.DB_NAME}?retryWrites=true&w=majority&appName=movies`
    );
};


module.exports = {
    dbCon
 }
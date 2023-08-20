require('dotenv').config();
const mongoose = require("mongoose");
const uri = process.env.URI_MONGODB
module.exports = mongoose.connect(uri).then(() => {
    console.log("connection successful");
}).catch((err) => {
    console.log("no connection", err);
});


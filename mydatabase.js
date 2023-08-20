const mongoose = require("mongoose");
const uri = "mongodb+srv://abhishek2gaming:MongodbAbhi@cluster0.smrmunl.mongodb.net/pagination?retryWrites=true&w=majority"

module.exports = mongoose.connect(uri).then(() => {
    console.log("connection successful");
}).catch((err) => {
    console.log("no connection", err);
});


const path = require("path");
const express = require("express");
const app = express();
const connect = require("./mydatabase");
const productController = require("./product-controller");
const transporter = require("./mail");

app.use(express.json());
 
app.use("/products",productController);



app.listen(5000,() => {
    console.log("listening to port 5000");
})



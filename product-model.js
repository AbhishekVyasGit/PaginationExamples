const mongoose = require("mongoose");

const productSchema = new mongoose.Schema(
    {
        title: {type: String, required: true},
        price: {type: Number, required: true},
        sellerEmail: {type: String, required: true},
        product_image: {type: String, required: true},
    },
    {
        versionKey: false,
        timestamps: true,
    }
);

const Product = mongoose.model("products", productSchema);

module.exports = Product;
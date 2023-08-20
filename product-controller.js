const path = require("path");
const express = require("express");
const router = express.Router();
const Product = require("./product-model");
const transporter = require("./mail");


/*
   body => req.body
   url => req.params
   query => req.query

*/

router.get("/", async (req, res) => {
    try {
        const page = req.query.page || 1;
        const pageSize = req.query.pageSize || 100;;
        const sort = req.query.sort;
        const search = req.query.search || "";
        const searchByTitle = {title: {$regex: search, $options: "i"}};

        const skip = (page - 1) * pageSize;

        const products = await Product.find(searchByTitle)
            .sort({ price: sort == "price" ? 1 : -1})
            .skip(skip)
            .limit(pageSize)
            .lean().exec();  // its not required but its good habit

        const totalPages = Math.ceil((await Product.find().countDocuments()) / pageSize);
        // console.log("query is: => ", req.query);
        return res.status(200).send({ products, totalPages })
    } catch (err) {
        return res.status(500).send({ message: err.message })
    }
});

router.post("/", async (req, res) => {
    try {

        console.log(`directory path is :  ${__dirname}  and  file path is :  ${__filename}`);
        const product = await Product.create(req.body);

        const info = await transporter.sendMail({
            from: '"amazon admin" <admin@amazon.com>', // sender address
            to: product.sellerEmail, // list of receivers
            subject: "Your product is successfully created.",
            text: "Hello sir, Your product is successfully created.",
            // html: "<b>Hello sir, Your product is successfully created.</b>"

            alternatives: [
                {
                    contentType: 'text/html',
                    path: path.join(__dirname, "./product-created-mail.html"),
                },
                // this second item(object) is attachment , so it is like text file         
                {
                    filename: 'product-created-mail.html',
                    path: path.join(__dirname, "./product-created-mail.html"),
                },
            ],
        });

        return res.status(201).send({ message: "Product is successfully created." });

    } catch (err) {
        return res.status(500).send({ message: err });
    }
})

module.exports = router;
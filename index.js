const express = require("express");
const app = express();
const connect = require("./config/db");
const path = require('path');

app.use(express.json());

const PORT = process.env.PORT || 5000;

const productController = require("./controller/product_cont");

app.use("/product", productController);

app.use(express.static(path.join(__dirname, 'client/build')));
app.get('*', (req, res) => {
    res.sendFile(path.join(__dirname + '/client/build/index.html'))
});

app.listen(PORT, async () => {
    await connect();
    console.log("Listening on Port 5000");
});
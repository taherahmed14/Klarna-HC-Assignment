const express = require("express");
const router = express.Router();
const Product = require("../model/product_model");

router.post("", async (req, res) => {
    try {
        const product = await Product.create(req.body);
        return res.status(200).send({ product });
    }
    catch(e) {
        return res.status(400).send({ error: e.message, status: "Failed"  });
    }
});

router.get("", async (req, res) => {
    try {
        const products = await Product.find().lean().exec();
        return res.status(200).send({ products });
    }
    catch(e) {
        return res.status(400).send({ error: e.message, status: "Failed"  });
    }
});

router.get("/:id", async (req, res) => {
    try {
        const product = await Product.findById(req.params.id).lean().exec();
        return res.status(200).send({ product });
    }
    catch(e) {
        return res.status(400).send({ error: e.message, status: "Failed"  });
    }
});

module.exports = router;


const mongoose = require("mongoose");

const ProductSchema = new mongoose.Schema({
    title: { type: String, required: true },
    description: { type: String, required: true },
    discount: { type: Number, required: true },
    img: { type: String, required: true },
    category: { type: String, required: true },
    pro_type: { type: String, required: true },
    featured: { type: String, required: true }
},
{ versionKey: false, timestamps: true });

module.exports = mongoose.model("product", ProductSchema);
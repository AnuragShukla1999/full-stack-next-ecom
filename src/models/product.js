import mongoose from "mongoose";

const ProductSchema = new mongoose.Schema(
    {
        name: String,
        description: String,
        price: Number,
        category: String,
        sizes: Array,
        deliveryInfo: String,
        onSale: String,
        priceDrop: String,
        imageUrl: String,
    },
    { timeUrl: True }
);

const Product = mongoose.models.Product || mongoose.model("Products", ProductSchema);

export default Product;
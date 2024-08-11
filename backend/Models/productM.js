import mongoose from "mongoose";

const productSchema = new mongoose.Schema(
    {
        title: {
            type: String,
            required: [true, "Name Product Required"],
            trim: true,
            unique: [true, "Product name must be unique"],
        },
        description: {
            type: String,
            required: [true, "Description Product Required"],
        },
        price: {
            type: Number,
            required: [true, "Price Product Required"],
            trim: true,
        },
        images: [
            {
                type: String, // URLs to product images
            },
        ],
        categoryId: [
            {
                type: mongoose.Schema.Types.ObjectId,
                ref: "Category", // References to the Category model
            },
        ],
        discount: {
            type: Number, // Discount amount in percentage (e.g., 10 for 10% discount)
            default: 0, // Default value is 0 (no discount)
        },
        rating: {
            type: Number, // Average product rating (e.g., 4.5)
            default: 0, // Default value is 0
            min: 0, // Minimum rating is 0
            max: 5, // Maximum rating is 5
        },
        numReviews: {
            type: Number, // Number of reviews
            default: 0, // Default value is 0
        },
        comment:{
            type:mongoose.Schema.Types.ObjectId,
            ref:"Comment"
        }
    },
    { timestamps: true } // Automatically add createdAt and updatedAt timestamps
);

const Product = mongoose.model('Product', productSchema);

module.exports = Product
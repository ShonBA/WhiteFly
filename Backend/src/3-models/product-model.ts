import mongoose, { Document, ObjectId, Schema, model } from "mongoose";
import { CategoryModel } from "./category-model";

// 1. Interface describing the content of our product model:
export interface IProductModel extends Document {
    // We don't need to declare id. There is an automatic _id which is the primary key. Type: ObjectId
    name: string;
    price: number;
    stock: number;
    categoryId: ObjectId; // FK to the categories collection.
}

// 2. Schema describing the model rules:
export const ProductSchema = new Schema<IProductModel>({
    name: {
        type: String,
        required: [true, "Missing name."],
        minlength: [2, "Name must be minimum 2 chars."],
        maxlength: [100, "Name can't exceed 100 chars."],
        match: [/^[A-Z].*$/, "Name must start with a capital letter."],
        trim: true,
        unique: true
    },
    price: {
        type: Number,
        required: [true, "Missing price."],
        min: [0, "Price can't be negative."],
        max: [1000, "Price can't exceed 1000."]
    },
    stock: {
        type: Number,
        required: [true, "Missing stock."],
        min: [0, "Stock can't be negative."],
        max: [1000, "Stock can't exceed 1000."]
    },
    categoryId: {
        type: mongoose.Schema.ObjectId
    }
}, {
    versionKey: false, // Don't add a __v field.
    toJSON: { virtuals: true }, // Convert to JSON virtual fields if exists.
    id: false // Don't duplicate _id field to another id field.
});

// Virtual field named category:
ProductSchema.virtual("category", {
    ref: CategoryModel, // Which model to populate.
    localField: "categoryId", // Which local field related to that model.
    foreignField: "_id", // Which foreign field related to that model.
    justOne: true // Each product contains only one category.
});

// 3. Model: 
export const ProductModel = model<IProductModel>("ProductModel", ProductSchema, "products"); // model name, schema type, db collection name.

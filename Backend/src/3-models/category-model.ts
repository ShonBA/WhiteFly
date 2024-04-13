import mongoose, { Document, ObjectId, Schema, model } from "mongoose";

// 1. Interface: 
export interface ICategoryModel extends Document {
    name: string;
    description: string;
}

// 2. Schema: 
export const CategorySchema = new Schema<ICategoryModel>({
    name: {
        type: String,
        required: [true, "Missing name."],
        minlength: [2, "Name must be minimum 2 characters long."],
        maxlength: [20, "Name can't exceed 20 characters."],
        trim: true,
        unique: true
    },
    description: {
        type: String,
        required: [true, "Missing description."],
        minlength: [10, "Description must be minimum 10 characters long."],
        maxlength: [100, "Description can't exceed 100 characters."],
        trim: true
    }
}, {
    versionKey: false
});

// 3. Model:
export const CategoryModel = model<ICategoryModel>("CategoryModel", CategorySchema, "categories");



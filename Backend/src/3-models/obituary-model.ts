import { Schema } from "mongoose";

export interface IObituaryModel {
    header: string;
    name: string;
    relation: string;
    text: string;
    imageUrl: string;
}

export const ObituarySchema = new Schema({
    header: {
        type: String,
        required: [true, "Missing Obituary Title."],
        minlength: [2, "Obituary Title must be minimum 2 chars."],
        maxlength: [100, "Obituary Title can't exceed 100 chars."],
        trim: true,
    },
    name: {
        type: String,
        required: [true, "Missing Obituary Name."],
        minlength: [2, "Obituary Name must be minimum 2 chars."],
        maxlength: [100, "Obituary Name can't exceed 100 chars."],
        trim: true,
    },
    relation: {
        type: String,
        required: [true, "Missing Obituary Relation."],
        minlength: [2, "Obituary Relation must be minimum 2 chars."],
        maxlength: [50, "Obituary Relation can't exceed 50 chars."],
        trim: true,
    },
    text: {
        type: String,
        required: [true, "Missing Obituary Description."],
        minlength: [2, "Obituary Description must be minimum 2 chars."],
        maxlength: [1500, "Obituary Description can't exceed 1500 chars."],
        trim: true,
    },
    imageUrl: {
        type: String,
        required: [true, "Missing Obituary Image."],
    }
}, {
    versionKey: false,
    toJSON: { virtuals: true },
    id: false
});
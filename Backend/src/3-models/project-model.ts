import { Schema } from "mongoose";

export interface IProjectModel {
    title: string;
    description: string;
    imageUrl: string;
}

export const ProjectSchema = new Schema({
    title: {
        type: String,
        required: [true, "Missing Project Title."],
        minlength: [2, "Project Title must be minimum 2 chars."],
        maxlength: [100, "Project Title can't exceed 100 chars."],
        trim: true,
    },
    description: {
        type: String,
        required: [true, "Missing Project Description."],
        minlength: [2, "Project Description must be minimum 2 chars."],
        maxlength: [1000, "Project Description can't exceed 1000 chars."],
        trim: true,
    },
    imageUrl: {
        type: String,
        required: [true, "Missing Project Image."],
        trim: true,
    }
}, {
    versionKey: false,
    toJSON: { virtuals: true },
    id: false
});
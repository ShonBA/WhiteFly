import { Schema } from "mongoose";

export interface IGalleryModel {
    albumImageUrl: string;
    description: string;
    images: string[];
}

export const GallerySchema = new Schema({
    albumImageUrl: {
        type: String,
        required: false,
    },
    description: {
        type: String,
        required: false,
        minlength: [2, "Gallery Description must be minimum 2 chars."],
        maxlength: [500, "Gallery Description can't exceed 500 chars."],
        trim: true,
    },
    images: {
        type: [String],
        required: [true, "Missing Gallery Image."],
    }
}, {
    versionKey: false,
    toJSON: { virtuals: true },
    id: false
});

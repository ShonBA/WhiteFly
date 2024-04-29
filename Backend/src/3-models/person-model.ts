import { UploadedFile } from "express-fileupload";
import { Document, Schema, model } from "mongoose";
import { GallerySchema, IGalleryModel } from "./gallery-model";
import { ILifeStoryModel, LifeStoriesSchema } from "./lifeStory-model";
import { IObituaryModel, ObituarySchema } from "./obituary-model";
import { IProjectModel, ProjectSchema } from "./project-model";

export interface IPersonModel extends Document {
    _id:string;
    firstName: string;
    secName: string;
    lastName: string;
    birthYear: number;
    deathYear: number;
    nextMemory: string;
    mainImageUrl: string;
    mainImage: UploadedFile;
    pray: string;
    lifeStories: ILifeStoryModel[];
    gallery: IGalleryModel[];
    obituaries: IObituaryModel[];
    projects: IProjectModel[];
}

export const PersonSchema = new Schema<IPersonModel>({
    firstName: {
        type: String,
        required: [true, "Missing first name."],
        minlength: [2, "Name must be minimum 2 chars."],
        maxlength: [100, "Name can't exceed 100 chars."],
        trim: true,
    },
    secName: {
        type: String,
        required: [true, "Missing second name."],
        minlength: [2, "Second Name must be minimum 2 chars."],
        maxlength: [100, "Second Name can't exceed 100 chars."],
        trim: true,
    },
    lastName: {
        type: String,
        required: [true, "Missing name."],
        minlength: [2, "Name must be minimum 2 chars."],
        maxlength: [100, "Name can't exceed 100 chars."],
        trim: true,
    },
    birthYear: {
        type: Number,
        required: [true, "Missing birth-year."],
        min: 0,
        max: new Date().getFullYear(),
        trim: true,
    },
    deathYear: {
        type: Number,
        required: [true, "Missing death-year."],
        min: 0,
        max: new Date().getFullYear(),
        trim: true,
    },
    nextMemory: {
        type: String,
        required: [true, "Missing Next Memory."],
        minlength: [2, "Next Memory must be minimum 2 chars."],
        maxlength: [100, "Next Memory can't exceed 100 chars."],
        trim: true,
    },
    mainImageUrl: {
        type: String,
        required: [true, "Missing Story Image."],
    },
    pray: String,
    lifeStories: LifeStoriesSchema,
    gallery: [GallerySchema],
    obituaries: [ObituarySchema],
    projects: [ProjectSchema]
}, {
    versionKey: false,
    toJSON: { virtuals: true },
    id: false
});

export const PersonModel = model<IPersonModel>("PersonModel", PersonSchema, "persons")
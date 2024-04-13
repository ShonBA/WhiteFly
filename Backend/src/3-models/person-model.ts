import mongoose, { Document, ObjectId, Schema, model } from "mongoose";

export interface IPersonModel extends Document {
    firstName: string;
    secName: string;
    lastName: string;
    birthYear: number;
    deathYear: number;
    nextMemory: string;
    mainImageUrl: string;
    pray: string;
    lifeStories: ObjectId;
    gallery: ObjectId;
    obituaries: ObjectId;
    projects: ObjectId;
}

const TimeLineSchema = new Schema({
    title: String,
    description: String,
    imageUrl: String
});

const GallerySchema = new Schema({
    albumImageUrl: String,
    description: String,
    images: [String]
});

const ObituarySchema = new Schema({
    header: String,
    name: String,
    relation: String,
    text: String,
    imageUrl: String
});

const ProjectSchema = new Schema({
    title: String,
    description: String,
    image: String,
    imageUrl: String
});

const LifeStoriesSchema = new Schema({
    story: String,
    storyImageUrl: String,
    timeLines: [TimeLineSchema]
});

export const PersonSchema = new Schema<IPersonModel>({
    firstName: {
        type: String,
        required: [true, "Missing first name."],
        minlength: [2, "Name must be minimum 2 chars."],
        maxlength: [100, "Name can't exceed 100 chars."],
        trim: true,
        unique: true
    },
    secName: {
        type: String,
        required: [true, "Missing second name."],
        minlength: [2, "Second Name must be minimum 2 chars."],
        maxlength: [100, "Second Name can't exceed 100 chars."],
        trim: true,
        unique: true
    },
    lastName: {
        type: String,
        required: [true, "Missing name."],
        minlength: [2, "Name must be minimum 2 chars."],
        maxlength: [100, "Name can't exceed 100 chars."],
        trim: true,
        unique: true
    },
    birthYear: {
        type: Number,
        required: [true, "Missing birth-year."],
        min: 0,
        trim: true,
        unique: true
    },
    deathYear: {
        type: Number,
        required: [true, "Missing death-year."],
        min: 0,
        trim: true,
        unique: true
    },
    nextMemory: {
        type: String,
        required: [true, "Missing Next Memory."],
        minlength: [2, "Next Memory must be minimum 2 chars."],
        maxlength: [100, "Next Memory can't exceed 100 chars."],
        trim: true,
        unique: true
    },
    pray: String,
    lifeStories: LifeStoriesSchema,
    gallery: [GallerySchema],
    obituaries: [ObituarySchema],
    projects: [ProjectSchema]
}, {
    versionKey: false, // Don't add a __v field.
    toJSON: { virtuals: true }, // Convert to JSON virtual fields if exists.
    id: false // Don't duplicate _id field to another id field.
});

export const PersonModel = model<IPersonModel>("PersonModel", PersonSchema, "persons")
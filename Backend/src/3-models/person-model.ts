import { Document, Schema, model } from "mongoose";

export interface IObituaryModel {
    header: string;
    name: string;
    relation: string;
    text: string;
    imageUrl: string;
}
const ObituarySchema = new Schema({
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


export interface IProjectModel {
    title: string;
    description: string;
    imageUrl: string;
}
const ProjectSchema = new Schema({
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



export interface IGalleryModel {
    albumImageUrl: string;
    description: string;
    images: string[];
}
const GallerySchema = new Schema({
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


export interface ITimeLineModel {
    title: string;
    description: string;
    imageUrl: string;
}

const TimeLineSchema = new Schema<ITimeLineModel>({
    title: {
        type: String,
        required: [true, "Missing Time Line Title."],
        minlength: [2, "Time Line Title must be minimum 2 chars."],
        maxlength: [50, "Time Line Title can't exceed 50 chars."],
        trim: true,
    },
    description: {
        type: String,
        required: [true, "Missing Time Line Description."],
        minlength: [2, "Time Line Description must be minimum 2 chars."],
        maxlength: [10000, "Time Line Description can't exceed 10000 chars."],
        trim: true,
    },
    imageUrl: {
        type: String,
        required: [true, "Missing Time Line Image."],
        trim: true,
    }
}, {
    versionKey: false,
    toJSON: { virtuals: true },
    id: false
});

export interface ILifeStoryModel {
    story: string;
    storyImageUrl: string;
    timeLines: ITimeLineModel[]
}
const LifeStoriesSchema = new Schema<ILifeStoryModel>({
    story: {
        type: String,
        required: [true, "Missing Story."],
        minlength: [100, "Story must be minimum 100 chars."],
        maxlength: [10000, "Story can't exceed 10000 chars."],
        trim: true,
    },
    storyImageUrl: {
        type: String,
        required: [true, "Missing Story Image."],
    },
    timeLines: [TimeLineSchema]
}, {
    versionKey: false,
    toJSON: { virtuals: true },
    id: false
});


export interface IPersonModel extends Document {
    firstName: string;
    secName: string;
    lastName: string;
    birthYear: number;
    deathYear: number;
    nextMemory: string;
    mainImageUrl: string;
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
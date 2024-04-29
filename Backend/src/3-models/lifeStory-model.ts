import { Schema } from "mongoose";
import { UploadedFile } from "express-fileupload";

export interface ITimeLineModel {
    title: string;
    description: string;
    imageUrl: string;
    image: UploadedFile;
}

export const TimeLineSchema = new Schema<ITimeLineModel>({
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
    storyImage: UploadedFile;
    timeLines: ITimeLineModel[]
}

export const LifeStoriesSchema = new Schema<ILifeStoryModel>({
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

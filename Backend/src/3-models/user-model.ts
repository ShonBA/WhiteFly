import { Document, Schema, model } from "mongoose";

export interface IUserModel extends Document {
    _id: string;
    firstName: string;
    lastName: string;
    email: string;
    password: string;
    role: string;
    websites_id: string[];
}

export const UserSchema = new Schema<IUserModel>({
    firstName: {
        type: String,
        required: [true, "Missing first name."],
        minlength: [2, "Name must be minimum 2 chars."],
        maxlength: [100, "Name can't exceed 100 chars."],
        trim: true,
    },
    lastName: {
        type: String,
        required: [true, "Missing last name."],
        minlength: [2, "Last Name must be minimum 2 chars."],
        maxlength: [100, "Last Name can't exceed 100 chars."],
        trim: true,
    },
    email: {
        type: String,
        required: [true, "Missing email."],
        minlength: [2, "Email must be minimum 2 chars."],
        maxlength: [100, "Email can't exceed 100 chars."],
        trim: true,
        unique: true
    },
    password: {
        type: String,
        required: [true, "Missing Password."],
        minlength: [2, "Password must be minimum 2 chars."],
        trim: true,
    },
    role: {
        type: String,
        enum: ["Admin", "User"]
    }
}, {
    versionKey: false,
});

export const UserModel = model<IUserModel>("UserModel", UserSchema, "users");
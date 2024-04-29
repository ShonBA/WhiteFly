import { Document, Schema, model } from "mongoose";

export interface ICredentialsModel extends Document {
    email: string;
    password: string;
}

export const CredentialsSchema = new Schema<ICredentialsModel>({
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
}, {
    versionKey: false,
});

export const CredentialsModel = model<ICredentialsModel>("CredentialsModel", CredentialsSchema);
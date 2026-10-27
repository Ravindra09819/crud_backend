import mongoose from "mongoose";

const userSchema = new mongoose.Schema(
    {
        name: {
            type: String,
            required: [true, "Name is required"],
            trim: true
        },
        fathername: {
            type: String,
            required: [true, "Father's name is required"],
            trim: true
        },
        email: {
            type: String,
            required: [true, "Email is required"],
            trim: true,
            lowercase: true
        },
        phone: {
            type: String,
            required: [true, "Phone number is required"],
            trim: true
        }
    },
    { timestamps: true }
);

const UserModels = mongoose.model("user", userSchema);

export default UserModels;

import UserModels from "../models/User.js";

// 1. CREATE USER (POST)
export const Createuser = async (req, res) => {
    try {
        const { name, fathername, email, phone } = req.body;

        if (!name || !fathername || !email || !phone) {
            return res.status(400).json({
                success: false,
                message: "All fields (Name, Father's Name, Email, Phone) are required."
            });
        }

        const newUser = new UserModels({
            name,
            fathername,
            email,
            phone
        });

        await newUser.save();

        return res.status(201).json({
            success: true,
            message: "User created successfully!",
            user: newUser
        });
    } catch (error) {
        console.error("Error creating user:", error);
        return res.status(500).json({
            success: false,
            message: "Internal Server Error while creating user",
            error: error.message
        });
    }
};

// 2. GET ALL USERS (GET)
export const getUsers = async (req, res) => {
    try {
        const users = await UserModels.find().sort({ createdAt: -1 });
        return res.status(200).json({
            success: true,
            count: users.length,
            users
        });
    } catch (error) {
        console.error("Error fetching users:", error);
        return res.status(500).json({
            success: false,
            message: "Internal Server Error while fetching users",
            error: error.message
        });
    }
};

// 3. GET SINGLE USER BY ID (GET)
export const getUserById = async (req, res) => {
    try {
        const { id } = req.params;
        const user = await UserModels.findById(id);

        if (!user) {
            return res.status(404).json({
                success: false,
                message: "User not found"
            });
        }

        return res.status(200).json({
            success: true,
            user
        });
    } catch (error) {
        console.error("Error fetching user:", error);
        return res.status(500).json({
            success: false,
            message: "Internal Server Error while fetching user",
            error: error.message
        });
    }
};

// 4. UPDATE USER BY ID (PUT)
export const updateUser = async (req, res) => {
    try {
        const { id } = req.params;
        const { name, fathername, email, phone } = req.body;

        const updatedUser = await UserModels.findByIdAndUpdate(
            id,
            { name, fathername, email, phone },
            { new: true, runValidators: true }
        );

        if (!updatedUser) {
            return res.status(404).json({
                success: false,
                message: "User not found to update"
            });
        }

        return res.status(200).json({
            success: true,
            message: "User updated successfully!",
            user: updatedUser
        });
    } catch (error) {
        console.error("Error updating user:", error);
        return res.status(500).json({
            success: false,
            message: "Internal Server Error while updating user",
            error: error.message
        });
    }
};

// 5. DELETE USER BY ID (DELETE)
export const deleteUser = async (req, res) => {
    try {
        const { id } = req.params;
        const deletedUser = await UserModels.findByIdAndDelete(id);

        if (!deletedUser) {
            return res.status(404).json({
                success: false,
                message: "User not found to delete"
            });
        }

        return res.status(200).json({
            success: true,
            message: "User deleted successfully!",
            user: deletedUser
        });
    } catch (error) {
        console.error("Error deleting user:", error);
        return res.status(500).json({
            success: false,
            message: "Internal Server Error while deleting user",
            error: error.message
        });
    }
};

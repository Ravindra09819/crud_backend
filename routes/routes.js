import express from "express";
import {
    Createuser,
    getUsers,
    getUserById,
    updateUser,
    deleteUser
} from "../controller/UserController.js";

const routers = express.Router();

// Routes for CRUD Operations
routers.post("/create", Createuser);
routers.get("/get", getUsers);
routers.get("/get/:id", getUserById);
routers.put("/update/:id", updateUser);
routers.delete("/delete/:id", deleteUser);

export default routers;
// Routes for CRUD Operations
routers.post("/create", Createuser);
routers.get("/get", getUsers);
routers.get("/get/:id", getUserById);
routers.put("/update/:id", updateUser);
routers.delete("/delete/:id", deleteUser);

export default routers;

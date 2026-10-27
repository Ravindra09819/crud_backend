import express from "express";
import cors from "cors";
import dotenv from "dotenv";
import dbCon from "./utils/db.js";
import routers from "./routes/routes.js";

dotenv.config();
const app = express();

// Middlewares
app.use(cors());
app.use(express.json());

// Connect to MongoDB
dbCon();

// Root route for quick health-check
app.get("/", (req, res) => {
    res.json({ message: "CRUD API Server is up and running" });
});

// API Routes
app.use("/api", routers);

// 404 Route Handler
app.use((req, res) => {
    res.status(404).json({ success: false, message: "Endpoint not found" });
});

const PORT = process.env.PORT || 4000;
app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}...`);
});

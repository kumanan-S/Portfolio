import express from "express";
import cors from "cors";
import helmet from "helmet";
import morgan from "morgan";
import dotenv from "dotenv";
import contactRouter from "./routes/contact.js";

// Load environment variables
dotenv.config();

const app = express();
const PORT = process.env.PORT || 5000;

// Security Middlewares
app.use(helmet({
  contentSecurityPolicy: false, // Turn off CSP for easy local testing
}));

// CORS Middleware to allow Vite Frontend
app.use(cors({
  origin: [
    "http://localhost:5173",
    "http://127.0.0.1:5173",
    "https://kumanan-portfolio.onrender.com"
  ],
  methods: ["GET", "POST", "PUT", "DELETE", "OPTIONS"],
  credentials: true
}));
// Logging and Request Parsing
app.use(morgan("dev"));
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

// Backend API Endpoints
app.use("/api/contact", contactRouter);

// Health check endpoint
app.get("/", (req, res) => {
  res.json({ status: "healthy", message: "Kumanan Portfolio contact form API is active." });
});

// Global Error Handler Middleware
app.use((err, req, res, next) => {
  console.error("Unhandled Error:", err.message);
  res.status(500).json({
    success: false,
    message: "An internal server error occurred.",
    error: process.env.NODE_ENV === "development" ? err.message : {}
  });
});

app.listen(PORT, () => {
  console.log(`[SERVER] Running on port http://localhost:${PORT}`);
});

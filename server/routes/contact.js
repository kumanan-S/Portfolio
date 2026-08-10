import express from "express";
import { handleContactSubmit } from "../controllers/contactController.js";

const router = express.Router();

// POST: /api/contact - handles form submissions
router.post("/", handleContactSubmit);

export default router;

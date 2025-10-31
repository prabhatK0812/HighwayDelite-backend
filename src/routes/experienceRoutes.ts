import express from "express";
import { getExperiences, createExperience } from "../controllers/experienceController";

const router = express.Router();

router.get("/", getExperiences);
router.post("/", createExperience);

export default router;

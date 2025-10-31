import { Request, Response } from "express";

import { Experience } from "../models/experienceModel";

// GET all experiences
export const getExperiences = async (req: Request, res: Response) => {
  try {
    const search = req.query.search
      ? { title: { $regex: req.query.search as string, $options: "i" } }
      : {};
    const data = await Experience.find(search);
    res.json(data);
  } catch (err) {
    res.status(500).json({ message: "Server error", error: err });
  }
};

// POST new experience
export const createExperience = async (req: Request, res: Response) => {
  try {
    const exp = await Experience.create(req.body);
    res.status(201).json(exp);
  } catch (err) {
    res.status(400).json({ message: "Invalid data", error: err });
  }
};

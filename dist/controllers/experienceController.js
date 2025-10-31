"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.createExperience = exports.getExperiences = void 0;
const experienceModel_1 = require("../models/experienceModel");
// GET all experiences
const getExperiences = async (req, res) => {
    try {
        const search = req.query.search
            ? { title: { $regex: req.query.search, $options: "i" } }
            : {};
        const data = await experienceModel_1.Experience.find(search);
        res.json(data);
    }
    catch (err) {
        res.status(500).json({ message: "Server error", error: err });
    }
};
exports.getExperiences = getExperiences;
// POST new experience
const createExperience = async (req, res) => {
    try {
        const exp = await experienceModel_1.Experience.create(req.body);
        res.status(201).json(exp);
    }
    catch (err) {
        res.status(400).json({ message: "Invalid data", error: err });
    }
};
exports.createExperience = createExperience;

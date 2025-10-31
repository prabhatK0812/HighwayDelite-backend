"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const promoCodes_1 = require("../data/promoCodes");
const router = express_1.default.Router();
router.post("/validate", (req, res) => {
    const { code } = req.body;
    const promo = promoCodes_1.promoCodes.find((p) => p.code.toLowerCase() === code.toLowerCase());
    if (!promo)
        return res.status(400).json({ valid: false, message: "Invalid code" });
    res.json({ valid: true, promo });
});
exports.default = router;

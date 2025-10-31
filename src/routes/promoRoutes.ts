
import express from "express";
import { promoCodes } from "../data/promoCodes";

const router = express.Router();

router.post("/validate", (req, res) => {
  const { code } = req.body;
  const promo = promoCodes.find(
    (p) => p.code.toLowerCase() === code.toLowerCase()
  );

  if (!promo) return res.status(400).json({ valid: false, message: "Invalid code" });

  res.json({ valid: true, promo });
});

export default router;

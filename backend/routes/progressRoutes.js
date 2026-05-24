import express from "express";

import authMiddleware from "../middleware/authMiddleware.js";

import {
  saveProgress,
  getProgress,
} from "../controllers/progressController.js";

const router = express.Router();

router.post(
  "/save",
  authMiddleware,
  saveProgress
);

router.get(
  "/my-progress",
  authMiddleware,
  getProgress
);

export default router;
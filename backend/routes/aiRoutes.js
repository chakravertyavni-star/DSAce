import express from "express";

import {
  getExplanation,
} from "../controllers/aiController.js";

const router = express.Router();

router.get(
  "/:topic",
  getExplanation
);

export default router;
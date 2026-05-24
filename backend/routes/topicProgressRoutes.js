import express from "express";

import authMiddleware
from "../middleware/authMiddleware.js";

import {

  updateTopicProgress,
  getSubjectProgress,

} from "../controllers/topicProgressController.js";

const router =
  express.Router();

/* SAVE */

router.post(
  "/update",
  authMiddleware,
  updateTopicProgress
);

/* FETCH */

router.get(
  "/:subjectId",
  authMiddleware,
  getSubjectProgress
);

export default router;
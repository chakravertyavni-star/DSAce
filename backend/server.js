import express from "express";
import cors from "cors";
import dotenv from "dotenv";
import authRoutes from "./routes/authRoutes.js";
import progressRoutes from "./routes/progressRoutes.js";
import topicProgressRoutes from "./routes/topicProgressRoutes.js";
import aiRoutes from "./routes/aiRoutes.js";



dotenv.config();

const app = express();

app.use(cors());
app.use(express.json());

app.use("/api/auth", authRoutes);
app.use("/api/progress", progressRoutes);
app.use("/api/topic-progress",topicProgressRoutes);
app.use("/api/ai",aiRoutes);


app.get("/", (req, res) => {
  res.json({
    message: "Backend running successfully",
  });
});

const PORT = 8000;

app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});

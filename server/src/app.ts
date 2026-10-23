
import express from "express";
import cors from "cors";
import helmet from "helmet";
import mongoose from "mongoose";
const app = express();

app.use(helmet());
app.use(cors({
  origin: "http://localhost:5173"
}));

app.use(express.json());
app.use(express.urlencoded({ extended: true }));



app.get("/api/health", (req, res) => {
  const databaseConnected = mongoose.connection.readyState === 1;

  res.status(databaseConnected ? 200 : 503).json({
    success: databaseConnected,
    message: databaseConnected
      ? "LearnSphere AI API is running"
      : "Database connection unavailable",
    database: databaseConnected ? "connected" : "disconnected"
  });
});

export default app;

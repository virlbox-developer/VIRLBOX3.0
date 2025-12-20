import "reflect-metadata";
import express from "express";
import cors from "cors";
import helmet from "helmet";
import rateLimit from "express-rate-limit";
import * as dotenv from "dotenv";
import { createConnection } from "typeorm";
import logger from "./utils/logger";
import errorHandler from "./middleware/error-handler";
import requestLogger from "./middleware/request-logger";

// Load environment variables
dotenv.config();

const app = express();
const PORT = process.env.PORT || 3000;

// Security middleware
app.use(helmet());
app.use(cors({
  origin: process.env.CORS_ORIGIN || "*",
  credentials: true,
  optionsSuccessStatus: 200
}));

// Rate limiting
const limiter = rateLimit({
  windowMs: 15 * 60 * 1000, // 15 minutes
  max: 100, // Limit each IP to 100 requests per windowMs
  message: "Too many requests from this IP, please try again later.",
});
app.use("/api/", limiter);

// Body parsing
app.use(express.json({ limit: "10mb" }));
app.use(express.urlencoded({ limit: "10mb", extended: true }));

// Logging middleware
app.use(requestLogger);

// Health check endpoint
app.get("/api/health", (req, res) => {
  res.json({
    status: "healthy",
    timestamp: new Date().toISOString(),
    uptime: process.uptime(),
    environment: process.env.NODE_ENV
  });
});

// Database initialization
async function initializeDatabase() {
  try {
    const AppDataSource = require("./database/data-source").AppDataSource;
    await AppDataSource.initialize();
    logger.info("Database connected successfully");
  } catch (error) {
    logger.error("Database connection failed:", error);
    process.exit(1);
  }
}

// Routes
app.use("/api/auth", require("./routes/auth").default);
app.use("/api/agents", require("./routes/agents").default);
app.use("/api/content", require("./routes/content").default);
app.use("/api/analytics", require("./routes/analytics").default);
app.use("/api/integrations", require("./routes/integrations").default);
app.use("/api/social", require("./routes/social").default);

// Error handling
app.use(errorHandler);

// Start server
async function start() {
  try {
    await initializeDatabase();
    
    app.listen(PORT, () => {
      logger.info(`✅ Server running on http://localhost:${PORT}`);
      logger.info(`📚 API Docs: http://localhost:${PORT}/api/docs`);
    });
  } catch (error) {
    logger.error("Failed to start server:", error);
    process.exit(1);
  }
}

start();

// Graceful shutdown
process.on("SIGTERM", () => {
  logger.info("SIGTERM signal received: closing HTTP server");
  process.exit(0);
});


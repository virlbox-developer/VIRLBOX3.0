import * as fs from "fs";
import * as path from "path";

const logsDir = path.join(__dirname, "../../logs");

// Create logs directory if it doesn't exist
if (!fs.existsSync(logsDir)) {
  fs.mkdirSync(logsDir, { recursive: true });
}

const logger = {
  info: (message: string, data?: any) => {
    const timestamp = new Date().toISOString();
    const log = `[INFO] ${timestamp} - ${message}`;
    console.log(log, data || "");
    fs.appendFileSync(path.join(logsDir, "info.log"), log + "\n");
  },

  error: (message: string, error?: any) => {
    const timestamp = new Date().toISOString();
    const log = `[ERROR] ${timestamp} - ${message}`;
    console.error(log, error);
    fs.appendFileSync(path.join(logsDir, "error.log"), log + "\n" + (error?.stack || "") + "\n");
  },

  warn: (message: string, data?: any) => {
    const timestamp = new Date().toISOString();
    const log = `[WARN] ${timestamp} - ${message}`;
    console.warn(log, data || "");
    fs.appendFileSync(path.join(logsDir, "warn.log"), log + "\n");
  },

  debug: (message: string, data?: any) => {
    if (process.env.NODE_ENV === "development") {
      const timestamp = new Date().toISOString();
      const log = `[DEBUG] ${timestamp} - ${message}`;
      console.log(log, data || "");
      fs.appendFileSync(path.join(logsDir, "debug.log"), log + "\n");
    }
  },

  api: (method: string, path: string, status: number, duration: number) => {
    const timestamp = new Date().toISOString();
    const log = `[API] ${timestamp} - ${method} ${path} ${status} ${duration}ms`;
    console.log(log);
    fs.appendFileSync(path.join(logsDir, "api.log"), log + "\n");
  }
};

export default logger;


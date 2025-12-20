import { DataSource } from "typeorm";
import * as dotenv from "dotenv";

dotenv.config();

const AppDataSource = new DataSource({
  type: "postgres",
  host: process.env.DB_HOST || "localhost",
  port: parseInt(process.env.DB_PORT || "5432"),
  username: process.env.DB_USER || "postgres",
  password: process.env.DB_PASSWORD || "postgres",
  database: process.env.DB_NAME || "virlbox",
  synchronize: process.env.DB_SYNC === "true",
  logging: process.env.NODE_ENV === "development",
  entities: ["src/database/entities/**/*.ts"],
  migrations: ["src/database/migrations/**/*.ts"],
  migrationsRun: true,
  subscribers: [],
});

export default AppDataSource;


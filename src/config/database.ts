import { DataSource } from "typeorm";
import dotenv from "dotenv";

dotenv.config();

export const database = new DataSource({
  type: "mysql",
  host: process.env.DB_HOST,
  port: 3306,
  username: process.env.DB_USERNAME,
  password: process.env.DB_PASSWORD,
  database: process.env.DB_NAME,
  entities: [],
  migrations: [`${__dirname}/../migrations/*.{ts,js}`],
});

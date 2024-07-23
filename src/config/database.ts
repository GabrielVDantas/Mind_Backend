import { DataSource } from "typeorm";
import dotenv from "dotenv";
import User from "../entities/User";
import Transaction from "../entities/Transaction";
import Category from "../entities/Category";

dotenv.config();

export const database = new DataSource({
  type: "mysql",
  host: process.env.WCDB_HOST,
  port: 3306,
  username: process.env.WCDB_USERNAME,
  password: process.env.WCDB_PASSWORD,
  database: process.env.WCDB_NAME,
  entities: [User, Transaction, Category],
  migrations: [`${__dirname}/../migrations/*.{ts,js}`],
});

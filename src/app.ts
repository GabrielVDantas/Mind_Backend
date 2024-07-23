import express, { Express } from "express";
import dotenv from "dotenv";
import "reflect-metadata";
import { database } from "./config/database";
import cors from "cors";
import indexRoutes from "./routes/indexRoutes";
import CategoryService from "./service/utilService/categoryService";

dotenv.config();

const app: Express = express();
app.use(express.json());
app.use(cors());
app.use(indexRoutes);

database
  .initialize()
  .then(() => {
    console.log("Conexão estabelecida");
    CategoryService.categoryService();
  })
  .catch((erro) => console.log(erro));

export default app;

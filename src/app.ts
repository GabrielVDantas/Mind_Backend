import express, { Express, Request, Response } from "express";
import dotenv from "dotenv";
import "reflect-metadata";
import { database } from "./config/database";

dotenv.config();

const app: Express = express();
const port = process.env.PORT || 3000;

app.get("/", (req: Request, res: Response) => {
  res.send("Express + TypeScript Server");
});

database.initialize()
.then(() => console.log("Conexão estabelecida"))
.catch((erro) => console.log(erro))

export default app;
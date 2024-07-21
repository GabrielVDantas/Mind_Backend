import { Router } from "express";
import upload from "../middleware/multerMiddleware";
import AuthController from "../controller/UserController/authController";

const userRoutes = Router();

userRoutes.post("/register", upload.single("avatar"), AuthController.registerController);

userRoutes.post("/login", AuthController.loginController);

export default userRoutes;
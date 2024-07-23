import { Router } from "express";
import upload from "../middleware/multerMiddleware";
import AuthController from "../controller/UserController/authController";
import AuthMiddleware from "../middleware/authMiddleware";
import GetUserController from "../controller/UserController/getUserController";

const userRoutes = Router();

userRoutes.post("/register", upload.single("avatar"), AuthController.registerController);

userRoutes.post("/login", AuthController.loginController);

userRoutes.use(AuthMiddleware.authMiddleware);

userRoutes.get("/profile", GetUserController.getUserController)

export default userRoutes;
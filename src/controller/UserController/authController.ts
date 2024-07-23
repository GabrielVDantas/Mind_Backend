import { Request, Response } from "express";
import AuthService from "../../service/authService";

class AuthController {
  static async registerController(req: Request, res: Response) {
    const { username, email, password } = req.body;
    const avatar = req.file!.buffer;
    try {
      const registeredUser = await AuthService.registerService(
        username,
        email,
        password,
        avatar
      );
      res.status(201).json({
        message: "Usuário registrado com sucesso!",
        user: registeredUser,
      });
    } catch (error) {
      res
        .status(500)
        .json({ message: `${error} - Usuário não será registrado!` });
    }
  }

  static async loginController(req: Request, res: Response) {
    const { email, password } = req.body;
    
    try {
      const loggedUser = await AuthService.loginService(email, password);
      res.json({
        message: "Usuário logado com sucesso!",
        user: loggedUser,
      });
    } catch (error) {
      res.status(500).json({ message: `${error} - Usuário não será logado!` });
    }
  }

  static getUserTokenData(req: Request, res: Response) {
    return res.json(req.user);
  }
}

export default AuthController;

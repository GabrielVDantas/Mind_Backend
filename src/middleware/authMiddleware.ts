import { Request, Response, NextFunction } from "express";
import TokenService from "../service/utilService/tokenService";
import userRepository from "../repositories/userRepository";

class AuthMiddleware {
  static async authMiddleware(req: Request, res: Response, next: NextFunction) {
    const { authorization } = req.headers;
    if (!authorization) throw new Error("JWT não encontrado!");

    const token = await TokenService.getToken(authorization);
    if (!token) throw new Error("JWT inválido!");

    const { id } = await TokenService.verifyToken(token);
    
    const user = await userRepository.findOneBy({id});
    if (!user) throw new Error("Usuário não existe!");

    const {password, ...loggedUser} = user;
    req.user = loggedUser;

    next();
  }
}

export default AuthMiddleware;

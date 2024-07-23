import { Request, Response } from "express";
import GetUserService from "../../service/userService/getUserService";
import { Long } from "typeorm";

class GetUserController {
  static async getUserController(req: Request, res: Response) {
    const userId = req.user.id as Long;

    try {
      const userProfile =
        await GetUserService.getUserData(
          userId
        );
      res.json({
        message: "Dados do usuário enviados com sucesso!",
        user: userProfile,
      });
    } catch (error) {
      res
        .status(500)
        .json({ message: `${error} - Dados do usuário não serão enviados!` });
    }
  }
}

export default GetUserController;

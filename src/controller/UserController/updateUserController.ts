import { Request, Response } from "express";
import { Long } from "typeorm";
import UpdateUserService from "../../service/userService/updateUserService";

class UpdateUserController {
  static async updateUserController(req: Request, res: Response) {
    const userId = req.user.id as Long;
    const about = req.params.about;
    let data: Buffer | string;
    if (about === "avatar") {
      data = req.file?.buffer as Buffer;
    } else {
       data = req.body[about] as string; 
    }
    try {
      const updatedUser = await UpdateUserService.updateUserService(
        userId,
        about,
        data
      );
      res.json({
        message: "Informação do usuário alterada com sucesso!",
        updatedUser: updatedUser,
      });
    } catch (error) {
      res.status(500).json({ message: `Erro: ${error}` });
    }
  }
}

export default UpdateUserController;

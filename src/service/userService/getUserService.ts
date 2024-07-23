import { Long } from "typeorm";
import userRepository from "../../repositories/userRepository";
import User from "../../entities/User";
import ImageService from "../utilService/imageService";

class GetUserService {
  static async getUserData(userId: Long) {
    const user = (await userRepository.findOneBy({ id: userId })) as User;
    const { password, avatar, ...userDataWithoutPassAndAvatar } = user;
    return {userDataWithoutPassAndAvatar, avatar: ImageService.convertBufferToBase64(user.avatar)}
  }
}

export default GetUserService;

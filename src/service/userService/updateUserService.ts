import { Long } from "typeorm";
import userRepository from "../../repositories/userRepository";
import User from "../../entities/User";
import PasswordService from "../utilService/passwordService";
import ImageService from "../utilService/imageService";

class UpdateUserService {
    static async updateUserService(userId: Long, about: string, newData: Buffer | string) {
        const existingUser = await userRepository.findOneBy({id: userId}) as User;
        if (about === "username") {
            existingUser.username = newData as string;
        } else if (about === "email") {
            existingUser.email = newData as string;
        } else if (about === "password") {
            const newEncodedPassword = await PasswordService.encodePassword(newData as string);
            existingUser.password = newEncodedPassword;
        } else if (about === "avatar") {
            existingUser.avatar = newData as Buffer;
        }
        const savedUser = await userRepository.save(existingUser);
        const {password, avatar, ...updatedUser} = savedUser;
        return {updatedUser, avatar: ImageService.convertBufferToBase64(savedUser.avatar)}
    }
}

export default UpdateUserService;
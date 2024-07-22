import User from "../entities/User";
import userRepository from "../repositories/userRepository";
import PasswordService from "./utilService/passwordService";
import TokenService from "./utilService/tokenService";

class AuthService {
  static async registerService(
    username: string,
    email: string,
    password: string,
    avatar: Buffer
  ) {
    const existingUser = (await userRepository.findOneBy({ email })) as User;
    if (existingUser) {
      throw new Error("Já existe um usuário com essas informações");
    }
    const encodedPassword = await PasswordService.encodePassword(password);
    const newUser = userRepository.create({
      username,
      email,
      password: encodedPassword,
      avatar,
    });

    await userRepository.save(newUser);
    return newUser;
  }

  static async loginService(email: string, password: string) {
    const existingUser = (await userRepository.findOneBy({ email })) as User;
    if (!existingUser)
      throw new Error("Não existe um usuário com essas informações");

    const compareResult = await PasswordService.comparePasswords(
      password, existingUser.password
    );    
    if (!compareResult) throw new Error("Dados incorretos!");
    const token = await TokenService.generateToken(existingUser.id);

    const {
      password: removedPassword,
      avatar: removedAvatar,
      ...loggedUserWithoutAvatar
    } = existingUser;
    return {
      loggedUserWithoutAvatar,
      token: token,
    };
  }
}

export default AuthService;

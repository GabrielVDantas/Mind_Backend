import { Long } from "typeorm";
import jwt from "jsonwebtoken";
import dotenv from "dotenv";

dotenv.config();

type JwtPayload = {
  id: Long;
}

class TokenService {
  static async generateToken(id: Long) {
    return jwt.sign({ id }, process.env.WCJWT_PASSWORD || "", {
      expiresIn: "1d",
    });
  }

  static async getToken(authorization: string) {
    return authorization.split(" ")[1];
  }

  static async verifyToken(token: string) {
    return jwt.verify(token, process.env.WCJWT_PASSWORD || "") as JwtPayload;
  }
}

export default TokenService;

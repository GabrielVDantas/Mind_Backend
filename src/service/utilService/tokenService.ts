import { Long } from "typeorm";
import jwt from "jsonwebtoken";
import dotenv from "dotenv";

dotenv.config();

class TokenService {
  static async generateToken(id: Long) {
    return jwt.sign({ id }, process.env.WCJWT_PASSWORD || "", {
      expiresIn: "1d",
    });
  }
}

export default TokenService;

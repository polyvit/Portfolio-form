import jwt from "jsonwebtoken";
import dotenv from "dotenv";

const envVariables = dotenv.config();

class TokenService {
  static async generateAccessToken(payload) {
    return await jwt.sign(payload, envVariables.parsed.ACCESS_TOKEN_SECRET, {
      expiresIn: "30m",
    });
  }
  static async generateRefreshToken(payload) {
    return await jwt.sign(payload, envVariables.parsed.REFRESH_TOKEN_SECRET, {
      expiresIn: "15d",
    });
  }
}

export default TokenService;

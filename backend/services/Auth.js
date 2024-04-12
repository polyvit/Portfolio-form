import UserRepository from "../repositories/User.js";
import SessionRepository from "../repositories/Session.js";
import TokenService from "./Token.js";
import bcrypt from "bcryptjs";
import { Conflict, NotFound, Unauthorized } from "../utils/Errors.js";
import { ACCESS_TOKEN_MAXAGE } from "../constants.js";

class AuthService {
  static async signIn({ email, password, fingerprint }) {
    //check if there is such user in db, if not - throw an error
    const userData = await UserRepository.getUserData(email);
    if (!userData) throw new NotFound("Такого пользователя не существует");
    //check if password is correct, if not - throw an error
    const isPasswordValid = bcrypt.compareSync(password, userData.password);
    if (!isPasswordValid) {
      console.log("signInService", "password not valid");
      throw new Unauthorized("Неверный логин или пароль");
    }
    const payload = { id: userData.id, email: userData.email };
    const accessToken = await TokenService.generateAccessToken(payload);
    const refreshToken = await TokenService.generateRefreshToken(payload);
    await SessionRepository.createRefreshSession({
      id: userData.id,
      refreshToken,
      fingerprint,
    });
    return {
      accessToken,
      refreshToken,
      accessTokenExpiration: ACCESS_TOKEN_MAXAGE,
    };
  }

  static async signUp({ email, password, fingerprint }) {
    const userData = await UserRepository.getUserData(email);
    if (userData) throw new Conflict("Такой пользователь уже существует");
    const hashedPassword = bcrypt.hashSync(password, 8);
    const { id } = await UserRepository.createUser({ email, hashedPassword });
    const payload = { id, email };
    const accessToken = await TokenService.generateAccessToken(payload);
    const refreshToken = await TokenService.generateRefreshToken(payload);
    await SessionRepository.createRefreshSession({
      id,
      refreshToken,
      fingerprint,
    });
    return {
      accessToken,
      refreshToken,
      accessTokenExpiration: ACCESS_TOKEN_MAXAGE,
    };
  }

  static async logOut(refreshToken) {}

  static async refresh({ fingerprint, currentRefreshToken }) {}
}

export default AuthService;

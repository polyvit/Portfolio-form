import UserRepository from "../repositories/User.js";
import SessionRepository from "../repositories/Session.js";
import TokenService from "./Token.js";
import bcrypt from "bcryptjs";
import { Conflict } from "../utils/Errors.js";
import { ACCESS_TOKEN_MAXAGE } from "../constants.js";

class AuthService {
  static async signIn({ login, password, fingerprint }) {}

  static async signUp({ login, password, fingerprint }) {
    // check if there such user in db, if yes, throw an error
    const userData = await UserRepository.getUserData(login);
    if (userData) throw new Conflict("Такой пользователь уже существует");
    // if not, hash password, bcrypt.hashSync(password, 8)
    const hashedPassword = bcrypt.hashSync(password, 8);
    // add new user to db, get id back
    const { id } = await UserRepository.createUser({ login, hashedPassword });
    const payload = { id, login };
    // generate access and refresh tokens with TokenService
    const accessToken = await TokenService.generateAccessToken(payload);
    const refreshToken = await TokenService.generateRefreshToken(payload);
    // create refresh session in db
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

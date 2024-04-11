import AuthService from "../services/Auth.js";
import ErrorUtils from "../utils/Errors.js";
import { COOKIE_SETTINGS } from "../constants.js";

class AuthController {
  static async signUp(req, res) {
    const { email, password } = req.body;
    const { fingerprint } = req;
    try {
      const { accessToken, refreshToken, accessTokenExpiration } =
        await AuthService.signUp({ email, password, fingerprint });
      res.cookie("refreshToken", refreshToken, COOKIE_SETTINGS.REFRESH_TOKEN);
      return res.status(200).json({ accessToken, accessTokenExpiration });
    } catch (err) {
      return ErrorUtils.catchError(res, err);
    }
  }
}

export default AuthController;

import { IAuthFormData } from "../../types";
import endpoints from "../endpoints";
import AuthHelper from "./auth.helper";
import { axiosInstance } from "./axios";

interface IAuthResponse {
  accessToken: string;
  accessTokenExpiration: string;
}

class AuthService {
  static async main(type: "login" | "register", data: IAuthFormData) {
    const response = await axiosInstance.post<IAuthResponse>(endpoints.AUTH[type], data)
    if (response.data.accessToken) AuthHelper.saveAccessToken(response.data.accessToken)
    return response
  }
}

export default AuthService

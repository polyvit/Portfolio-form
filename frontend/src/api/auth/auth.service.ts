import { AxiosPromise } from "axios";
import { IAuthFormData } from "../../types";
import endpoints from "../endpoints";
import { axiosInstance } from "./axios";

interface IAuthResponse {
  accessToken: string;
  accessTokenExpiration: string;
}

class AuthService {
  static async main(type: "login" | "register", data: IAuthFormData) {
    const response = await axiosInstance.post<IAuthResponse>(endpoints.AUTH[type], data)
    console.log(response.data)
  }
}

export default AuthService

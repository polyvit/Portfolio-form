export interface IAuthFormData {
    email: string;
    password: string;
}

export interface IUser {
    id: number;
    email: string;
    password: string;
}

export enum TokensEnum {
    ACCESS_TOKEN = "accessToken",
    REFRESH_TOKEN = "refreshToken"
}
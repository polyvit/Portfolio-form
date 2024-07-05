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

export interface IFormData {
  title: string;
  short: string;
  description: string;
  year: number;
  depo: string;
  repo: string;
  tasks: string;
}

export interface IField {
    errorText: string;
    inputValid: boolean;
    isEmail: boolean;
    isEmpty: boolean;
    isYear: boolean;
    label: string;
    minLengthError: boolean;
    placeholder: string;
    wasTouched: boolean;
    value: string;
    onBlur(): void
    onChange(): void
    resetInput(): void
}

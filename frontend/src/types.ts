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

export type image = {
  name: string;
  url: string;
  file: File;
  dbUrl: string;
};

export interface IData {
  title: string;
  short: string;
  description: string;
  demo: string;
  repo: string;
  year: number;
  tasks: string;
  images: image[];
  stack: string[];
}

export interface IInput {
  isEmpty: boolean;
    minLengthError: boolean;
    isEmail: boolean;
    isYear: boolean;
    errorText: string;
    inputValid: boolean;
    value: any;
    onChange: (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => void;
    onBlur: () => void;
    resetInput: () => void;
    wasTouched: boolean;
}

export type IForm = Record<string, IInput & {
  label: string;
  placeholder: string;
  type: string;
  rows?: number
}>
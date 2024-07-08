import { IForm, image } from "./types";

export const validateData = (data: IForm) => {
  return Object.values(data).every((val) => val.length);
};
export const stringToArray = (string: string) => {
  return string.split(",").map(str => str.trim());
};
export const extractUrl = (array: image[]) => {
  return array.map((img) => img.dbUrl);
};

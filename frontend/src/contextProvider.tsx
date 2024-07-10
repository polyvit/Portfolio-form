import React, { createContext, useState } from "react";
import { IData } from "./types";

export const FormContext = createContext<IFormContext>({
  state: {},
  actions: {},
});

export const INITIAL_DATA = {
  title: "",
  short: "",
  description: "",
  demo: "",
  repo: "",
  year: 2024,
  tasks: "Провести тесты",
  images: [],
  stack: [],
};

interface IFormContext {
  state: IData | {};
  actions: Record<string, React.Dispatch<React.SetStateAction<IData>>> | {};
}

const FormProvider = ({ children }: { children: React.ReactNode }) => {
  const [data, setData] = useState(INITIAL_DATA);
  const value = {
    state: { data },
    actions: { setData },
  };
  return <FormContext.Provider value={value}>{children}</FormContext.Provider>;
};

export default FormProvider;

import React, { createContext, useState } from "react";
export const FormContext = createContext({ state: {}, actions: {} });

const FormProvider = ({ children }: { children: React.ReactNode }) => {
  const [data, setData] = useState({
    title: "",
    short: "",
    description: "",
    demo: "",
    repo: "",
    year: 2024,
    tasks: "",
    images: [],
    stack: [],
  });
  const value = {
    state: { data },
    actions: { setData },
  };
  return <FormContext.Provider value={value}>{children}</FormContext.Provider>;
};

export default FormProvider;

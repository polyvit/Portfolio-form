import React from "react";
import ProjectForm from "./ProjectForm";
import useFormContext from "../hooks/use-form-context";
import useForm from "../hooks/use-form";
import useInput from "../hooks/use-input";

const FormWrapper = () => {
  const context = useFormContext();
  const formGeneralData = useForm();
  const tasks = useInput("", { isEmpty: true });
  console.log("context", context.state.data);
  return (
    <div className="text-center mt-[30px]">
      <ProjectForm formGeneralData={formGeneralData} tasksToBeDone={tasks} />
    </div>
  );
};

export default FormWrapper;

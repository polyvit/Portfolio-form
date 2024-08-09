import ProjectForm from "./ProjectForm";
import useForm from "../hooks/use-form";
import useInput from "../hooks/use-input";
import { IForm } from "../types";
import Done from "./Done";
import { useState } from "react";

const FormWrapper = () => {
  const formGeneralData: IForm = useForm();
  const tasks = useInput("");
  const [isSuccess, setIsSuccess] = useState<boolean | null>(null);
  const [isError, setIsError] = useState<boolean | null>(null);

  return (
    <div className="text-center mt-[30px]">
      {!isSuccess && !isError && (
        <ProjectForm
          formGeneralData={formGeneralData}
          tasks={tasks}
          setIsSuccess={setIsSuccess}
          setIsError={setIsError}
        />
      )}
      {isSuccess && <Done />}
      {isError && <h1>Что-то пошло не так</h1>}
    </div>
  );
};

export default FormWrapper;

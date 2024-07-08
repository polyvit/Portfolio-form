import ProjectForm from "./ProjectForm";
import useForm from "../hooks/use-form";
import useInput from "../hooks/use-input";
import { IForm } from "../types";

const FormWrapper = () => {
  const formGeneralData: IForm = useForm();
  const tasks = useInput("", { isEmpty: true });
  return (
    <div className="text-center mt-[30px]">
      <ProjectForm formGeneralData={formGeneralData} tasks={tasks} />
    </div>
  );
};

export default FormWrapper;

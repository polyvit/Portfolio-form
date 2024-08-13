import { useQueryClient } from "@tanstack/react-query";
import Stepper from "./Stepper";
import GeneralData from "./GeneralData";
import ImageDropdown from "./ImageDropdown";
import Stack from "./Stack";
import Tasks from "./Tasks";
import useStepper from "../hooks/use-stepper";
import { IForm, IInput } from "../types";
import useFormContext from "../hooks/use-form-context";
import { extractUrl, stringToArray, validateData } from "../utils/common";
import { INITIAL_DATA } from "../contextProvider";
import ProjectService from "../api/main.service";
import { stack, steps } from "../utils/fields";

const ProjectForm = ({
  formGeneralData,
  tasks,
  setIsSuccess,
  setIsError,
}: {
  formGeneralData: IForm;
  tasks: IInput;
  setIsSuccess(a: boolean): void;
  setIsError(a: boolean): void;
}) => {
  const {
    stepIndex,
    step,
    next,
    back,
    setStepNumber,
    isFirstStep,
    isLastStep,
  } = useStepper([
    <GeneralData formData={formGeneralData} />,
    <ImageDropdown />,
    <Stack stack={stack} />,
    <Tasks tasks={tasks} />,
  ]);
  const queryClient = useQueryClient();
  const email = queryClient.getQueryData(["userEmail"]);

  const {
    //@ts-ignore
    state: { data },
    //@ts-ignore
    actions: { setData },
  } = useFormContext();

  const showSuccess = () => {
    setIsSuccess(true);
    setData(INITIAL_DATA);
    setTimeout(() => setIsSuccess(false), 5000);
    location.reload();
  };

  const handleMainBtnClick = async () => {
    if (isLastStep) {
      const isValid = validateData(data);
      if (isValid) {
        const newData = {
          demo: data.demo,
          description: data.description,
          images: extractUrl(data.images),
          plans: stringToArray(tasks.value),
          repo: data.repo,
          short: data.short,
          stack: data.stack,
          title: data.title,
          year: data.year,
        };
        try {
          const result = await ProjectService.addProject(newData);
          if (result == true) showSuccess();
        } catch (e) {
          console.log(e);
          setIsError(true);
          setTimeout(() => setIsError(false), 5000);
        }
      }
    } else {
      next();
    }
  };

  return (
    <div className="flex flex-col items-center gap-4">
      <Stepper
        steps={steps}
        stepNumber={stepIndex}
        setStepNumber={setStepNumber}
      />
      <form className="w-[500px] grow">{step}</form>
      <div className="flex gap-4">
        {!isFirstStep && (
          <button
            onClick={back}
            type="button"
            className="focus:outline-none text-white bg-purple-700 hover:bg-purple-800 focus:ring-4 focus:ring-purple-300 font-medium rounded-lg text-sm px-5 py-2.5 mb-2 dark:bg-purple-600 dark:hover:bg-purple-700 dark:focus:ring-purple-900"
          >
            Вернуться
          </button>
        )}
        <button
          onClick={handleMainBtnClick}
          type="button"
          disabled={email !== process.env.REACT_APP_OWNER_EMAIL && isLastStep}
          className="focus:outline-none text-white bg-purple-700 hover:bg-purple-800 focus:ring-4 focus:ring-purple-300 font-medium rounded-lg text-sm px-5 py-2.5 mb-2 dark:bg-purple-600 dark:hover:bg-purple-700 dark:focus:ring-purple-900 disabled:bg-purple-400 disabled:opacity-50 disabled:cursor-not-allowed"
        >
          {isLastStep ? "Отправить" : "Далее"}
        </button>
      </div>
    </div>
  );
};

export default ProjectForm;

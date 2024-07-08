import Stepper from "./Stepper";
import GeneralData from "./GeneralData";
import ImageDropdown from "./ImageDropdown";
import Stack from "./Stack";
import Tasks from "./Tasks";
import useStepper from "../hooks/use-stepper";
import { IForm, IInput } from "../types";
import useFormContext from "../hooks/use-form-context";

const steps = ["Основное", "Картинки", "Стек", "Дополнительно"];
const stack = [
  "JavaScript",
  "TypeScript",
  "React",
  "Redux",
  "Vue",
  "Vuex",
  "Next",
  "Jest",
  "Pinia",
  "Prisma",
];

const ProjectForm = ({
  formGeneralData,
  tasks,
}: {
  formGeneralData: IForm;
  tasks: IInput;
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

  const {
    state: { data },
  } = useFormContext();

  const handleMainBtnClick = () => {
    if (isLastStep) {
      console.log("data", data);
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
          className="focus:outline-none text-white bg-purple-700 hover:bg-purple-800 focus:ring-4 focus:ring-purple-300 font-medium rounded-lg text-sm px-5 py-2.5 mb-2 dark:bg-purple-600 dark:hover:bg-purple-700 dark:focus:ring-purple-900"
        >
          {isLastStep ? "Отправить" : "Далее"}
        </button>
      </div>
    </div>
  );
};

export default ProjectForm;

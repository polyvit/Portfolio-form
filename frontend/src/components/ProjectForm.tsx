import Stepper from "./Stepper";
import GeneralData from "./GeneralData";
import ImageDropdown from "./ImageDropdown";
import Stack from "./Stack";
import Tasks from "./Tasks";
import useStepper from "../hooks/use-stepper";
import { IForm, IInput } from "../types";
import useFormContext from "../hooks/use-form-context";
import { extractUrl, stringToArray, validateData } from "../common";
import { firebaseConfig } from "../firebase/firebaseInit";
import { INITIAL_DATA } from "../contextProvider";

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
  setIsSuccess,
}: {
  formGeneralData: IForm;
  tasks: IInput;
  setIsSuccess(a: boolean): void;
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
    actions: { setData },
  } = useFormContext();

  const showSuccess = () => {
    setIsSuccess(true);
    setData(INITIAL_DATA);
    setTimeout(() => setIsSuccess(false), 5000);
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
          fetch(`${firebaseConfig.databaseURL}/test.json`, {
            method: "POST",
            body: JSON.stringify(newData),
            headers: {
              "Content-Type": "application/json",
            },
          }).then(() => showSuccess());
        } catch (e) {
          console.log(e);
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
          className="focus:outline-none text-white bg-purple-700 hover:bg-purple-800 focus:ring-4 focus:ring-purple-300 font-medium rounded-lg text-sm px-5 py-2.5 mb-2 dark:bg-purple-600 dark:hover:bg-purple-700 dark:focus:ring-purple-900"
        >
          {isLastStep ? "Отправить" : "Далее"}
        </button>
      </div>
    </div>
  );
};

export default ProjectForm;

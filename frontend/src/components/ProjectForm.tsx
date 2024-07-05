import React, { useState } from "react";
import Textarea from "../elements/Textarea";
import Stepper from "./Stepper";
import GeneralData from "./GeneralData";
import ImageDropdown from "./ImageDropdown";
import Stack from "./Stack";
import useInput from "../hooks/use-input";

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

const ProjectForm = () => {
  const [stepNumber, setStepNumber] = useState(0);
  const tasks = useInput("", { isEmpty: true });

  const handleMainBtnClick = () => {
    if (stepNumber === steps.length - 1) {
      console.log("Отправлено");
    } else {
      setStepNumber((stepNumber) => stepNumber + 1);
    }
  };

  return (
    <div className="flex flex-col items-center gap-4">
      <Stepper
        steps={steps}
        stepNumber={stepNumber}
        setStepNumber={setStepNumber}
      />
      <form className="w-[500px] grow">
        {stepNumber === 0 && <GeneralData />}
        {stepNumber === 1 && <ImageDropdown />}
        {stepNumber === 2 && <Stack stack={stack} />}
        {stepNumber === 3 && (
          <Textarea
            label="Задачи на доработку"
            placeholder="Перечислите через запятую, какие задачи по проекту вы планируете выполнить в дальнейшем"
            value={tasks.value}
            onChange={tasks.onChange}
            onBlur={tasks.onBlur}
            error={tasks.errorText}
            touched={tasks.wasTouched}
            invalid={tasks.inputValid}
            rows={8}
          />
        )}
      </form>
      <div className="flex gap-4">
        {stepNumber !== 0 && (
          <button
            onClick={() => setStepNumber((stepNumber) => stepNumber - 1)}
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
          {stepNumber === steps.length - 1 ? "Отправить" : "Далее"}
        </button>
      </div>
    </div>
  );
};

export default ProjectForm;

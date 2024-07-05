import React from "react";
import cn from "classnames";

interface IStepperProps {
  steps: string[];
  stepNumber: number;
  setStepNumber(step: number): void;
}

const Stepper: React.FC<IStepperProps> = ({
  steps,
  stepNumber,
  setStepNumber,
}) => {
  return (
    <ol className="flex items-center w-full p-3 space-x-2 text-sm font-medium text-center text-gray-500 bg-white border border-gray-200 rounded-lg shadow-sm dark:text-gray-400 sm:text-base dark:bg-gray-800 dark:border-gray-700 sm:p-4 sm:space-x-4 rtl:space-x-reverse">
      {steps.map((step, i) => (
        <li
          onClick={() => setStepNumber(i)}
          className={cn("flex items-center cursor-pointer", {
            ["text-blue-600 dark:text-blue-500"]: i === stepNumber,
          })}
        >
          <span
            className={cn(
              "flex items-center justify-center w-5 h-5 me-2 text-xs border  rounded-full shrink-0 ",
              {
                ["border-gray-500 dark:border-gray-400"]: i !== stepNumber,
                ["border-blue-600 dark:border-blue-500"]: i === stepNumber,
              }
            )}
          >
            {i + 1}
          </span>
          {step}
          {i !== steps.length - 1 && (
            <svg
              className="w-3 h-3 ms-2 sm:ms-4 rtl:rotate-180"
              aria-hidden="true"
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 12 10"
            >
              <path
                stroke="currentColor"
                stroke-linecap="round"
                stroke-linejoin="round"
                stroke-width="2"
                d="m7 9 4-4-4-4M1 9l4-4-4-4"
              />
            </svg>
          )}
        </li>
      ))}
    </ol>
  );
};

export default Stepper;

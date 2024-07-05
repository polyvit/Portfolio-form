import React, { useState } from "react";

const Stack = ({ stack }: { stack: string[] }) => {
  const [skillArray, setSkillArray] = useState<string[]>([]);

  return (
    <div>
      <h3 className="mb-4 font-semibold text-gray-900 dark:text-white">
        Выберите используемые технологии
      </h3>
      <ul className="items-center text-sm font-medium text-gray-900 bg-white border border-gray-200 rounded-lg sm:flex flex-wrap dark:bg-gray-700 dark:border-gray-600 dark:text-white">
        {stack.map((skill) => (
          <li
            key={skill}
            className=" border-b border-gray-200 sm:border-b-0 dark:border-gray-600"
          >
            <div className="flex items-center ps-3">
              <input
                id="vue-checkbox-list"
                type="checkbox"
                className="w-4 h-4 text-blue-600 bg-gray-100 border-gray-300 rounded focus:ring-blue-500 dark:focus:ring-blue-600 dark:ring-offset-gray-700 dark:focus:ring-offset-gray-700 focus:ring-2 dark:bg-gray-600 dark:border-gray-500"
                onClick={() => setSkillArray([...skillArray, skill])}
              />
              <label
                htmlFor="vue-checkbox-list"
                className="w-full py-3 ms-2 text-sm font-medium text-gray-900 dark:text-gray-300"
              >
                {skill}
              </label>
            </div>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default Stack;

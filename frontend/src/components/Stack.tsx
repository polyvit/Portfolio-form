import useFormContext from "../hooks/use-form-context";
import { IData } from "../types";

const Stack = ({ stack }: { stack: string[] }) => {
  const {
    actions: { setData },
    state: { data },
  } = useFormContext();

  const changeHandler = (skill: string) => {
    if (data.stack.includes(skill)) {
      setData((prev: IData) => ({
        ...prev,
        stack: prev.stack.filter((s) => s !== skill),
      }));
    } else {
      setData((prev: IData) => ({
        ...prev,
        stack: [...prev.stack, skill],
      }));
    }
  };

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
                checked={data.stack.includes(skill)}
                id={skill}
                type="checkbox"
                className="w-4 h-4 text-blue-600 bg-gray-100 border-gray-300 rounded focus:ring-blue-500 dark:focus:ring-blue-600 dark:ring-offset-gray-700 dark:focus:ring-offset-gray-700 focus:ring-2 dark:bg-gray-600 dark:border-gray-500"
                onChange={() => changeHandler(skill)}
              />
              <label
                htmlFor={skill}
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

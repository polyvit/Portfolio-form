import { DetailedHTMLProps, InputHTMLAttributes } from "react";
import cn from "classnames";

interface InputProps
  extends DetailedHTMLProps<
    InputHTMLAttributes<HTMLInputElement>,
    HTMLInputElement
  > {
  label: string;
  error: string;
  touched: boolean;
  invalid: boolean;
}

const errorInputStyle =
  "border-red-500 text-red-900 placeholder-red-700 focus:ring-red-500 focus:border-red-500 dark:text-red-500 dark:placeholder-red-500 dark:border-red-500";
const errorLabelStyle = "text-red-700 dark:text-red-500";

const Input: React.FC<InputProps> = ({
  label,
  type,
  error,
  touched,
  invalid,
  className,
  ...props
}) => {
  return (
    <div className={cn("mb-5", className)}>
      <label
        htmlFor={type}
        className={cn(
          "block mb-2 text-sm font-medium text-gray-900 dark:text-white",
          { [errorLabelStyle]: !invalid && touched }
        )}
      >
        {label}
      </label>
      <input
        type={type}
        {...props}
        className={cn(
          "bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500",
          { [errorInputStyle]: !invalid && touched }
        )}
      />
      {touched && error && (
        <p className="mt-2 text-sm text-red-600 dark:text-red-500">{error}</p>
      )}
    </div>
  );
};

export default Input;

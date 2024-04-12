import { useMutation } from "@tanstack/react-query";
import AuthService from "../api/auth/auth.service";
import { useNavigate } from "react-router-dom";

const FormPage = () => {
  const navigate = useNavigate();

  const { mutate: mutateLogout, isPending: isPendingLogout } = useMutation({
    mutationKey: ["logout"],
    mutationFn: () => AuthService.logOut(),
    onSuccess() {
      navigate("/sign-in");
    },
  });

  return (
    <div className="relative w-screen h-screen flex items-center justify-center">
      <button
        onClick={() => mutateLogout()}
        disabled={isPendingLogout}
        className="absolute top-5 right-5 text-gray-900 hover:text-white border border-gray-800 hover:bg-gray-900 focus:ring-4 focus:outline-none focus:ring-gray-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center me-2 mb-2 dark:border-gray-600 dark:text-gray-400 dark:hover:text-white dark:hover:bg-gray-600 dark:focus:ring-gray-800"
      >
        Logout
      </button>
      <div className="text-center">
        <h1>Здесь будет форма по добавлению новых проектов. </h1>
        <h2 className="my-10">
          Если вы не видите кнопку, значит вы просто посетитель и не имеете
          право на добавление проектов
        </h2>
        <button
          type="button"
          className="focus:outline-none text-white bg-purple-700 hover:bg-purple-800 focus:ring-4 focus:ring-purple-300 font-medium rounded-lg text-sm px-5 py-2.5 mb-2 dark:bg-purple-600 dark:hover:bg-purple-700 dark:focus:ring-purple-900"
        >
          Добавить
        </button>
      </div>
    </div>
  );
};

export default FormPage;

import { useMutation } from "@tanstack/react-query";
import AuthService from "../api/auth/auth.service";
import { useNavigate } from "react-router-dom";
import FormProvider from "../contextProvider";
import FormWrapper from "../components/FormWrapper";

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
    <FormProvider>
      <div className="relative w-screen h-screen flex justify-center items-center">
        <button
          onClick={() => mutateLogout()}
          disabled={isPendingLogout}
          className="absolute top-5 right-5 text-gray-900 hover:text-white border border-gray-800 hover:bg-gray-900 focus:ring-4 focus:outline-none focus:ring-gray-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center me-2 mb-2 dark:border-gray-600 dark:text-gray-400 dark:hover:text-white dark:hover:bg-gray-600 dark:focus:ring-gray-800"
        >
          Logout
        </button>
        <FormWrapper />
      </div>
    </FormProvider>
  );
};

export default FormPage;

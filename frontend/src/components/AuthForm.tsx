import { ChangeEvent, FormEvent, useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import Button from "../elements/Button";
import Input from "../elements/Input";
import AuthService from "../api/auth/auth.service";
import { useMutation, useQueryClient } from "@tanstack/react-query";
import { IAuthFormData } from "../types";
import ApiHelper from "../api/api.helper";
import useInput from "../hooks/use-input";

interface IAuthFormProps {
  BtnText: string;
  isLogin: boolean;
}

const AuthForm: React.FC<IAuthFormProps> = ({ BtnText, isLogin }) => {
  const email = useInput("", { isEmpty: true, isEmail: false });
  const password = useInput("", { isEmpty: true, minLength: 6 });
  const queryClient = useQueryClient();

  const navigate = useNavigate();

  const { mutate: mutateLogin, isPending: isPendingLogin } = useMutation({
    mutationKey: ["login"],
    mutationFn: (data: IAuthFormData) => AuthService.main("login", data),
    onSuccess: (data) => {
      queryClient.setQueryData(["userEmail"], data.data.email);
      email.resetInput();
      password.resetInput();
      navigate("/form");
    },
    onError: (err) => {
      ApiHelper.showErrorNotification(err);
    },
  });

  const { mutate: mutateRegister, isPending: isPendingRegister } = useMutation({
    mutationKey: ["register"],
    mutationFn: (data: IAuthFormData) => AuthService.main("register", data),
    onSuccess: (data) => {
      queryClient.setQueryData(["userEmail"], data.data.email);
      email.resetInput();
      password.resetInput();
      navigate("/form");
    },
    onError: (err) => {
      ApiHelper.showErrorNotification(err);
    },
  });

  const handleSubmit = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const emailValue: string = email.value;
    const passwordValue: string = password.value;
    const data = { email: emailValue, password: passwordValue };
    isLogin ? mutateLogin(data) : mutateRegister(data);
  };

  const isPending = isPendingLogin || isPendingRegister;
  const shouldDisable = !email.inputValid || !password.inputValid;

  return (
    <form className="max-w-sm mx-auto md:max-w-md" onSubmit={handleSubmit}>
      <Input
        label="Your email"
        type="email"
        required
        placeholder="email@mail.com"
        value={email.value}
        onChange={email.onChange}
        onBlur={email.onBlur}
        error={email.errorText}
        touched={email.wasTouched}
        invalid={email.inputValid}
      />
      <Input
        label="Your password"
        type="password"
        required
        placeholder="Minimum 6 symbols"
        value={password.value}
        onChange={password.onChange}
        onBlur={password.onBlur}
        error={password.errorText}
        touched={password.wasTouched}
        invalid={password.inputValid}
      />
      <Button type="submit" disabled={isPending || shouldDisable}>
        {BtnText}
      </Button>
      <Link
        to={isLogin ? "/sign-up" : "sign-in"}
        className="block mt-4 font-medium text-blue-600 dark:text-blue-500 hover:underline"
      >
        {isLogin ? "У меня нет аккаунта" : "У меня уже есть аккаунт"}
      </Link>
    </form>
  );
};

export default AuthForm;

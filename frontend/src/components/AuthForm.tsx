import { FormEvent, useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import Button from "../elements/Button";
import Input from "../elements/Input";
import AuthService from "../api/auth/auth.service";
import { useMutation } from "@tanstack/react-query";
import { IAuthFormData } from "../types";

interface IAuthFormProps {
  BtnText: string;
  isLogin: boolean;
}

const AuthForm: React.FC<IAuthFormProps> = ({ BtnText, isLogin }) => {
  const [email, setEmail] = useState<string>("");
  const [password, setPassword] = useState<string>("");

  const navigate = useNavigate();

  const { mutate: mutateLogin, isPending: isPendingLogin } = useMutation({
    mutationKey: ["login"],
    mutationFn: (data: IAuthFormData) => AuthService.main("login", data),
    onSuccess: () => {
      setEmail("");
      setPassword("");
      navigate("/form");
    },
  });

  const { mutate: mutateRegister, isPending: isPendingRegister } = useMutation({
    mutationKey: ["register"],
    mutationFn: (data: IAuthFormData) => AuthService.main("register", data),
    onSuccess: () => {
      setEmail("");
      setPassword("");
      navigate("/form");
    },
  });

  const handleSubmit = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const data = { email, password };
    isLogin ? mutateLogin(data) : mutateRegister(data);
    // AuthService.main(isLogin ? "login" : "register", {
    //   email,
    //   password,
    // });
  };

  const isPending = isPendingLogin || isPendingRegister;

  return (
    <form className="max-w-sm mx-auto md:max-w-md" onSubmit={handleSubmit}>
      <Input
        label="Your email"
        type="email"
        required
        placeholder="email@mail.com"
        value={email}
        onChange={(e) => setEmail(e.target.value)}
      />
      <Input
        label="Your password"
        type="password"
        required
        placeholder="Minimum 6 symbols"
        value={password}
        onChange={(e) => setPassword(e.target.value)}
      />
      <Button type="submit" disabled={isPending}>
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

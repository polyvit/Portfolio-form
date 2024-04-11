import { FormEvent, useState } from "react";
import { Link } from "react-router-dom";
import Button from "../elements/Button";
import Input from "../elements/Input";
import AuthService from "../api/auth/auth.service";

interface IAuthFormProps {
  BtnText: string;
  isLogin: boolean;
}

const AuthForm: React.FC<IAuthFormProps> = ({ BtnText, isLogin }) => {
  const [email, setEmail] = useState<string>("");
  const [password, setPassword] = useState<string>("");

  const handleSubmit = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    AuthService.main(isLogin ? "login" : "register", {
      email,
      password,
    });
  };

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
      <Button type="submit">{BtnText}</Button>
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

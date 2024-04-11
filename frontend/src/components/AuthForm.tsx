import { FormEvent, useState } from "react";
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
    <form className="max-w-sm mx-auto" onSubmit={handleSubmit}>
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
    </form>
  );
};

export default AuthForm;

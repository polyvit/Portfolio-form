import Button from "../elements/Button";
import Input from "../elements/Input";

const AuthForm = ({ BtnText }: { BtnText: string }) => {
  return (
    <form className="max-w-sm mx-auto">
      <Input
        label="Your email"
        type="email"
        required
        placeholder="email@mail.com"
      />
      <Input
        label="Your password"
        type="password"
        required
        placeholder="Min 6 symbols"
      />
      <Button type="submit">{BtnText}</Button>
    </form>
  );
};

export default AuthForm;

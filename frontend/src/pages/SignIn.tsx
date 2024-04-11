import IMAGE from "../assets/photoLogin.jpg";
import AuthForm from "../components/AuthForm";
import AuthLayout from "../components/AuthLayout";

const SignIn = () => {
  return (
    <AuthLayout image={IMAGE}>
      <h3 className="mb-10">Sign In</h3>
      <AuthForm BtnText="Войти" isLogin />
    </AuthLayout>
  );
};

export default SignIn;

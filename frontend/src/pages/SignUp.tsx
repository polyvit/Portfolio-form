import IMAGE from "../assets/photoRegistr.jpg";
import AuthLayout from "../components/AuthLayout";
import AuthForm from "../components/AuthForm";

const SignUp = () => {
  return (
    <AuthLayout image={IMAGE}>
      <h3 className="mb-10">Sign Up</h3>
      <AuthForm BtnText="Зарегистрироваться" isLogin={false} />
    </AuthLayout>
  );
};

export default SignUp;

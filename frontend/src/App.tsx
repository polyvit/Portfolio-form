import { Routes, Route, Navigate, useNavigate } from "react-router-dom";
import SignIn from "./pages/SignIn";
import SignUp from "./pages/SignUp";
import FormPage from "./pages/FormPage";
import { useEffect } from "react";
import AuthHelper from "./api/auth/auth.helper";

function App() {
  const navigate = useNavigate();

  useEffect(() => {
    // const token = AuthHelper.getAccessToken();
    // if (!token) {
    //   navigate("/sign-up");
    // }
  }, []);

  return (
    <>
      <Routes>
        <Route path="form" element={<FormPage />} />
        <Route path="sign-in" element={<SignIn />} />
        <Route path="sign-up" element={<SignUp />} />
        <Route path="*" element={<Navigate to={"sign-in"} />} />
      </Routes>
    </>
  );
}

export default App;

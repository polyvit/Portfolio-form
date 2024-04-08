import "./App.css";
import { Routes, Route, Navigate } from "react-router-dom";
import SignIn from "./pages/SignIn";
import SignUp from "./pages/SignUp";
import FormPage from "./pages/FormPage";

function App() {
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

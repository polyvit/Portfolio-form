import React from "react";

interface IAuthLayout {
  image: string;
  children: React.ReactNode;
}

const AuthLayout: React.FC<IAuthLayout> = ({ image, children }) => {
  return (
    <div className="flex flex-col gap-[50px] lg:flex-row">
      <img
        src={image}
        alt="photo"
        className="w-screen h-[300px] md:h-[500px] object-cover  lg:object-fill lg:w-[50vw] lg:h-[100vh]"
      />
      <div className="w-screen lg:w-[50vw] lg:h-[100vh] flex flex-col items-center justify-center">
        <div className="w-[50%] text-center">{children}</div>
      </div>
    </div>
  );
};

export default AuthLayout;

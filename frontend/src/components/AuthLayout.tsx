import React from "react";

// @ts-ignore

const AuthLayout = ({ image, children }) => {
  return (
    <div className="flex">
      <img src={image} alt="photo" className="w-[50vw] h-[100vh]" />
      <div className="w-[50vw] h-[100vh] flex flex-col items-center justify-center">
        <div className="w-[50%] text-center">{children}</div>
      </div>
    </div>
  );
};

export default AuthLayout;

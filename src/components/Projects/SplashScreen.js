import React from "react";
import { ScaleLoader } from "react-spinners";

const SplashScreen = () => {
  return (
    <div className="h-screen flex items-center justify-center">
      <ScaleLoader color="#f52225" />
    </div>
  );
};

export default SplashScreen;

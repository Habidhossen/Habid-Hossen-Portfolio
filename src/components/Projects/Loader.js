import React from "react";
import { ScaleLoader } from "react-spinners";

const Loader = () => {
  return (
    <div className="h-[300px] flex items-center justify-center">
      <ScaleLoader color="#f52225" />
    </div>
  );
};

export default Loader;

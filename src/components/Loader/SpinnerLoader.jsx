import React from "react";

const SpinnerLoader = ({ size = 24, color = "text-blue-600" }) => {
  return (
    <div className="flex justify-center items-center">
      <div
        className={`animate-spin rounded-full border-4 border-t-transparent ${color}`}
        style={{ width: size, height: size }}
      ></div>
    </div>
  );
};

export default SpinnerLoader;

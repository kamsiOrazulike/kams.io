import React from "react";

const LoadingPage = () => {
  return (
    <div className="w-full h-screen flex flex-col justify-center bg-gray-300 dark:bg-gray-900 text-gray-900 dark:text-white">
      <div className="mx-auto">
        <div className="loader">
          <div className="circle"></div>
          <div className="circle"></div>
          <div className="circle"></div>
          <div className="circle"></div>
        </div>
      </div>
    </div>
  );
};

export default LoadingPage;

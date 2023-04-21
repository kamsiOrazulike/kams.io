import React, { useState, useEffect } from "react";

const DarkModeToggle = () => {
  const [darkMode, setDarkMode] = useState(false);

  const handleDarkModeToggle = () => {
    setDarkMode(!darkMode);
  };

  useEffect(() => {
    if (darkMode) {
      document.body.classList.add("dark");
    } else {
      document.body.classList.remove("dark");
    }
  }, [darkMode]);

  return (
    <button
      className="text-gray-800 dark:text-white bg-gray-200 dark:bg-gray-700 rounded-full w-14 h-7 flex items-center justify-between focus:outline-none"
      onClick={handleDarkModeToggle}
    >
      <span
        className={`w-5 h-5 rounded-full bg-white shadow-md transform transition-all duration-300 ease-in ${
          darkMode ? "translate-x-7" : ""
        }`}
      />
    </button>
  );
};

export default DarkModeToggle;

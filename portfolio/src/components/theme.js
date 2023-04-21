import { FiSun, FiMoon } from "react-icons/fi";
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
      className="w-9 h-9 rounded-full flex items-center justify-center bg-gray-700 dark:bg-slate-800 transition duration-300 ease-in-out"
      onClick={handleDarkModeToggle}
    >
      {darkMode ? (
        <FiMoon className="text-gray-500 dark:text-gray-300 text-xl" />
      ) : (
        <FiSun className="text-yellow-500 dark:text-yellow-300 text-xl" />
      )}
    </button>
  );
};

export default DarkModeToggle;

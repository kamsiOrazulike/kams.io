import { FiSun, FiMoon } from "react-icons/fi";
import React, { useState, useEffect } from "react";

const DarkModeToggle = () => {
  const [darkMode, setDarkMode] = useState(false);

  const handleDarkModeToggle = () => {
    const newDarkMode = !darkMode;
    setDarkMode(newDarkMode);
    localStorage.setItem("darkMode", newDarkMode);
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
      className="w-9 h-9 rounded-full flex items-center justify-center bg-slate-600 dark:bg-slate-700 transition duration-500 ease-in-out"
      onClick={handleDarkModeToggle}
    >
      {darkMode ? (
        <FiSun className="text-yellow-500 dark:text-yellow-300 text-xl" />
      ) : (
        <FiMoon className="text-gray-200 dark:text-gray-300 text-xl" />
      )}
    </button>
  );
};

export default DarkModeToggle;

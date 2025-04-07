import React from "react";
import ToggleTheme from "../../hooks/ToggleTheme";

export default function Theme() {
  const { toggleDarkMode, isDarkMode } = ToggleTheme();
  return (
    <div
      onClick={toggleDarkMode}
      className="relative w-14 h-8 rounded-3xl bg-slate-300 dark:bg-primary place--center cursor-pointer transition-colors duration-300 ease-in-out"
    >
      <div
        className={`absolute top-1 rounded-full w-6 h-6 transition-all duration-300 ease-in-out ${
          isDarkMode ? "left-1 bg-body" : "right-1 bg-white"
        }`}
      />
    </div>
  );
}

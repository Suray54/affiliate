"use client";
import { useTheme } from "@/context/themeContext";

const ThemeToggleButton = () => {
  const { theme, toggleTheme } = useTheme();

  return (
    <i
      className={`ml-2 cursor-pointer bi bi-moon-fill text-sm  ${
        theme != "dark" ? "color-black" : "color-white"
      }`}
      onClick={toggleTheme}
    />
  );
};

export default ThemeToggleButton;

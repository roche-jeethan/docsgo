import { useState, useEffect } from "react";

const useDarkMode = () => {
  const [darkMode, setDarkMode] = useState(() => {
    if (typeof window !== "undefined" && localStorage.getItem("theme")) {
      return localStorage.getItem("theme") === "dark";
    }
    return false;
  });

  useEffect(() => {
    if (darkMode) {
      document.documentElement.classList.add("dark");
      localStorage.setItem("theme", "dark");
    } else {
      document.documentElement.classList.remove("dark");
      localStorage.setItem("theme", "light");
    }
  }, [darkMode]);

  return [darkMode, setDarkMode];
};

export default useDarkMode; 
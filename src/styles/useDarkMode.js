import { useState, useEffect } from "react";

const useDarkMode = () => {
  // Get the initial theme state
  const getInitialTheme = () => {
    if (typeof window === "undefined") return "light";
    
    // If theme exists in localStorage, use it
    if (localStorage.getItem("theme")) {
      return localStorage.getItem("theme");
    }
    
    // Otherwise, use system preference
    return window.matchMedia("(prefers-color-scheme: dark)").matches ? "dark" : "light";
  };

  const [theme, setTheme] = useState(getInitialTheme);
  
  // Function to update the theme
  const updateTheme = (newTheme) => {
    if (newTheme === "dark") {
      document.documentElement.classList.add("dark");
      localStorage.theme = "dark";
    } else if (newTheme === "light") {
      document.documentElement.classList.remove("dark");
      localStorage.theme = "light";
    } else if (newTheme === "system") {
      const isDarkMode = window.matchMedia("(prefers-color-scheme: dark)").matches;
      document.documentElement.classList.toggle("dark", isDarkMode);
      localStorage.removeItem("theme");
    }
    
    setTheme(newTheme);
  };
  
  // Listen for system preference changes when in system mode
  useEffect(() => {
    if (theme === "system") {
      const mediaQuery = window.matchMedia("(prefers-color-scheme: dark)");
      const handleChange = () => {
        document.documentElement.classList.toggle("dark", mediaQuery.matches);
      };
      
      mediaQuery.addEventListener("change", handleChange);
      return () => mediaQuery.removeEventListener("change", handleChange);
    }
  }, [theme]);
  
  // Initial effect to set the theme
  useEffect(() => {
    updateTheme(theme);
  }, []);
  
  return [theme, updateTheme];
};

export default useDarkMode;
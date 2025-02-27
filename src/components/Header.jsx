import React from 'react';
import useDarkMode from '../styles/useDarkMode.js';

const Header = () => {
  const [darkMode, setDarkMode] = useDarkMode();
  
  const toggleDarkMode = () => {
    setDarkMode(!darkMode);
  };

  return (
    <header className="bg-white dark:bg-gray-800 shadow">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between h-16">
          <div className="flex items-center">
            <h1 className="text-2xl font-bold text-gray-900 dark:text-white">DocsGo</h1>
          </div>
          <div className="flex items-center">
            <button
              type="button"
              onClick={toggleDarkMode}
              className="p-2 ml-4 bg-gray-200 dark:bg-gray-700 text-gray-800 dark:text-gray-100 rounded hover:bg-gray-300 dark:hover:bg-gray-600 cursor-pointer"
            >
              Theme Mode
            </button>
          </div>
        </div>
      </div>
    </header>
  );
};

export default Header;
import React from 'react';
import DarkMode from './DarkModeButton';

const Header = () => {

  return (
    <header className="bg-white dark:bg-gray-800 shadow">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between h-16">
          <div className="flex items-center">
            <h1 className="text-2xl font-bold text-gray-900 dark:text-white">DocsGo</h1>
          </div>
          <div className="flex items-center">
            <DarkMode />
          </div>
        </div>
      </div>
    </header>
  );
};

export default Header;
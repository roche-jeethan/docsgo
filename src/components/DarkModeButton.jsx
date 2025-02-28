import React from 'react';
import useDarkMode from '../styles/useDarkMode';

const DarkMode = () => {
    const [darkMode, setDarkMode] = useDarkMode();
    
    return (
        <button
            onClick={() => setDarkMode(!darkMode)}
            className="text-gray-900 dark:text-white cursor-pointer"
        >
            Switch
        </button>
    );
}

export default DarkMode;
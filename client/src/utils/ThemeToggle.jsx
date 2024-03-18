import React from 'react';
import { useTheme } from '../ThemeContext';

const ThemeToggle = () => {
  const { darkMode, toggleDarkMode } = useTheme();

  return (
    <button onClick={toggleDarkMode} className={`text-blue-500 ${darkMode ? 'bg-black text-white' : 'bg-white text-black'}`}>
      {darkMode ? 'Light Mode' : 'Dark Mode'}
    </button>
  );
};

export default ThemeToggle;

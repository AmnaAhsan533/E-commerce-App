import React, { createContext, useContext, useState, useEffect } from 'react';

// 1. Create Theme Context
const ThemeContext = createContext();

// 2. Create Theme Provider Component
export function ThemeProvider({ children }) {
  // Read initial theme from localStorage, or default to 'light'
  const [theme, setTheme] = useState(() => {
    return localStorage.getItem('glow_cart_theme') || 'light';
  });

  // Whenever `theme` changes, sync it with localStorage and the <html> document root
  useEffect(() => {
    const root = document.documentElement;

    if (theme === 'dark') {
      root.classList.add('dark');
    } else {
      root.classList.remove('dark');
    }

    localStorage.setItem('glow_cart_theme', theme);
  }, [theme]);

  // Function to toggle between 'light' and 'dark'
  const toggleTheme = () => {
    setTheme((prevTheme) => (prevTheme === 'light' ? 'dark' : 'light'));
  };

  return (
    <ThemeContext.Provider value={{ theme, toggleTheme }}>
      {children}
    </ThemeContext.Provider>
  );
}

// 3. Custom Hook for easy consumption
export const useTheme = () => {
  const context = useContext(ThemeContext);
  if (!context) {
    throw new Error('useTheme must be used within a ThemeProvider');
  }
  return context;
};
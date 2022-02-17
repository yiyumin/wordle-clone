import React, { useContext, useEffect, useState } from 'react';

type ThemeContextValues = {
  isDarkModeEnabled: boolean;
  setIsDarkModeEnabled: (isDarkModeEnabled: boolean) => void;
};

const ThemeContext = React.createContext<ThemeContextValues | undefined>(
  undefined
);

const useTheme = () => {
  const context = useContext(ThemeContext);
  if (context === undefined) {
    throw new Error('useTheme must be used within a ThemeProvider');
  }

  return context;
};

type ThemeProviderProps = {
  children: React.ReactNode;
};

const ThemeProvider = ({ children }: ThemeProviderProps) => {
  const [isDarkModeEnabled, setIsDarkModeEnabled] = useState(false);

  useEffect(() => {
    const darkModeJSON = localStorage.getItem('dark-mode-enabled');
    if (darkModeJSON !== null) {
      setIsDarkModeEnabled(JSON.parse(darkModeJSON));
    } else {
      setIsDarkModeEnabled(
        window.matchMedia('(prefers-color-scheme: dark').matches
      );
    }
  }, []);

  useEffect(() => {
    localStorage.setItem(
      'dark-mode-enabled',
      JSON.stringify(isDarkModeEnabled)
    );
  }, [isDarkModeEnabled]);

  const value = { isDarkModeEnabled, setIsDarkModeEnabled };

  return (
    <ThemeContext.Provider value={value}>{children}</ThemeContext.Provider>
  );
};

export { useTheme, ThemeProvider };

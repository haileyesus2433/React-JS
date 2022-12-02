import React, { useState, useContext } from "react";
export const ThemeContext = React.createContext();
const ThemeUpdate = React.createContext();

export const useTheme = () => {
  return useContext(ThemeContext);
};
export const useThemeUpdate = () => {
  return useContext(ThemeUpdate);
};

const ThemeProvider = ({ children }) => {
  const [darkTheme, setDarkTheme] = useState(false);

  const toggleTheme = () => {
    setDarkTheme((previousTheme) => !previousTheme);
  };

  return (
    <ThemeContext.Provider value={darkTheme}>
      <ThemeUpdate.Provider value={toggleTheme}>
        {children}
      </ThemeUpdate.Provider>
    </ThemeContext.Provider>
  );
};

export default ThemeProvider;

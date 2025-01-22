import { lightTheme, darkTheme } from "./theme";
import { createContext, useContext, useState, useMemo } from "react";
import { ThemeProvider } from "@mui/material/styles";
import CssBaseline from "@mui/material/CssBaseline";

const ThemeContext = createContext();
export const useThemeContext = () => useContext(ThemeContext);
export default function ThemeContextProvider({ children }) {
  const [isDarkMode, setIsDarkMode] = useState(false);
  const theme = useMemo(
    () => (isDarkMode ? darkTheme : lightTheme),
    [isDarkMode]
  );
  function toggleTheme() {
    setIsDarkMode((prev) => !prev);
  }
  return (
    <ThemeContext.Provider value={{ isDarkMode, toggleTheme }}>
      <ThemeProvider theme={theme}>
        <CssBaseline enableColorScheme />
        {children}
      </ThemeProvider>
    </ThemeContext.Provider>
  );
}

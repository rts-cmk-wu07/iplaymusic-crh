import React from "react";
import useLocalStorage from "use-local-storage";
import { createContext, useContext } from "react";

const ThemeContext = createContext<{
  theme: string;
  setTheme: ((theme: "dark" | "light") => void) | null;
}>({
  theme: "",
  setTheme: null,
});

export const useTheme = () => {
  return useContext(ThemeContext);
};

export const ThemeProvider = ({ children }: { children: React.ReactNode }) => {
  const defaultDark = window.matchMedia("(prefers-color-scheme: dark)").matches;
  const [theme, setInternalTheme] = useLocalStorage(
    "theme",
    defaultDark ? "dark" : ""
  );

  const setTheme = (theme: string) => {
    setInternalTheme(theme);
  };

  return (
    <ThemeContext.Provider
      value={{
        theme,
        setTheme,
      }}
    >
      <div className={theme}>{children}</div>
    </ThemeContext.Provider>
  );
};

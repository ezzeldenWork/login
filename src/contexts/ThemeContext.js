import React, {createContext} from "react";
import useToggleState from "../hooks/toggleState";

export const ThemeContext = createContext();

export function ThemeProveder(props) {
  const [isDarkMode, toggleTheme] = useToggleState(false);

  return (
    <ThemeContext.Provider
      value={{isDarkMode, toggleTheme}}
    >
      {props.children}
    </ThemeContext.Provider>
  );
}
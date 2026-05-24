import { createContext, useContext } from "react";

const ThemeContext = createContext({
  theme: "dark",
});

export function ThemeProvider({ children }) {
  return (
    <ThemeContext.Provider value={{ theme: "dark" }}>
      <div className="dark">
        {children}
      </div>
    </ThemeContext.Provider>
  );
}

export function useTheme() {
  return useContext(ThemeContext);
}

export default ThemeContext;

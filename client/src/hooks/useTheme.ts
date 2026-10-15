import { useCallback, useEffect, useState } from "react";
import { applyTheme, getInitialTheme, saveTheme, type Theme } from "../lib/theme";

export function useTheme() {
  const [theme, setTheme] = useState<Theme>(getInitialTheme);

  useEffect(() => {
    applyTheme(theme);
  }, [theme]);

  const toggleTheme = useCallback(() => {
    const next: Theme = theme === "dark" ? "light" : "dark";
    setTheme(next);
    saveTheme(next);
  }, [theme]);

  return { theme, toggleTheme };
}

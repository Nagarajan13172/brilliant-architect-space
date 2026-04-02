import { createContext, useContext, useEffect, useState, ReactNode } from "react";

type ThemeMode = "light" | "dark";
type ColorPalette = "default" | "ocean" | "sunset" | "forest" | "royal";

interface ThemeContextType {
  mode: ThemeMode;
  palette: ColorPalette;
  toggleMode: () => void;
  setPalette: (p: ColorPalette) => void;
}

const ThemeContext = createContext<ThemeContextType | undefined>(undefined);

export const ThemeProvider = ({ children }: { children: ReactNode }) => {
  const [mode, setMode] = useState<ThemeMode>(() =>
    (localStorage.getItem("theme-mode") as ThemeMode) || "dark"
  );
  const [palette, setPaletteState] = useState<ColorPalette>(() =>
    (localStorage.getItem("theme-palette") as ColorPalette) || "default"
  );

  useEffect(() => {
    const root = document.documentElement;
    root.classList.remove("light", "dark");
    root.classList.add(mode);
    localStorage.setItem("theme-mode", mode);
  }, [mode]);

  useEffect(() => {
    const root = document.documentElement;
    root.classList.remove("theme-ocean", "theme-sunset", "theme-forest", "theme-royal");
    if (palette !== "default") {
      root.classList.add(`theme-${palette}`);
    }
    localStorage.setItem("theme-palette", palette);
  }, [palette]);

  const toggleMode = () => setMode((m) => (m === "light" ? "dark" : "light"));
  const setPalette = (p: ColorPalette) => setPaletteState(p);

  return (
    <ThemeContext.Provider value={{ mode, palette, toggleMode, setPalette }}>
      {children}
    </ThemeContext.Provider>
  );
};

export const useTheme = () => {
  const ctx = useContext(ThemeContext);
  if (!ctx) throw new Error("useTheme must be used within ThemeProvider");
  return ctx;
};

export type { ColorPalette };

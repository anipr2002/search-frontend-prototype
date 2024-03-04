import { create } from "zustand";
import { Theme } from "../types/website";


type ThemeStore = {
    theme?: Theme;
    fontFamily?: string;
    setTheme?: (theme: string) => void;
    setFontFamily?: (fontFamily: string) => void;
    };

export const useTheme = create<ThemeStore>((set) => ({
    fontFamily: "monospace",
    setFontFamily: (fontFamily) => set({ fontFamily }),
}));
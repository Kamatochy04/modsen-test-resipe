import { createContext, useState } from 'react';

import { Theme } from '@/App';
import { darkTheme, lightTheme } from '@/styles/theme';

interface ThemeContextType {
    themeState: Theme;
    toggleTheme: () => void;
}

export const ThemeContext = createContext<ThemeContextType>({
    themeState: lightTheme,
    toggleTheme: () => {},
});

export const ThemeProvider: React.FC<{ children: React.ReactNode }> = ({ children }) => {
    const [themeState, setThemeState] = useState<Theme>(lightTheme);

    const toggleTheme = () => {
        setThemeState((prevTheme) => (prevTheme === lightTheme ? darkTheme : lightTheme));
    };

    return <ThemeContext.Provider value={{ themeState, toggleTheme }}>{children}</ThemeContext.Provider>;
};

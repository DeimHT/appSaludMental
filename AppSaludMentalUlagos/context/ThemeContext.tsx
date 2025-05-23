import React, { createContext, useContext, useState, useEffect } from 'react';
import { Appearance } from 'react-native';
import AsyncStorage from '@react-native-async-storage/async-storage';
import type { ThemeName } from '@/utils/logos';


type Theme = 'light' | 'dark';


interface ThemeContextProps {
    theme: Theme;
    toggleTheme: () => void;
    themeName: ThemeName;
    setThemeByName: (themeName: ThemeName) => void;
}

const ThemeContext = createContext<ThemeContextProps>({
    theme: 'light',
    toggleTheme: () => {},
    themeName: 'Tema azul',
    setThemeByName: () => {},
});

export const ThemeProvider = ({ children }: { children: React.ReactNode }) => {
    const colorScheme = Appearance.getColorScheme();
    const [theme, setTheme] = useState<Theme>(colorScheme === 'dark' ? 'dark' : 'light');

    const setThemeByName = async (name: ThemeName) => {
        const newTheme = name === 'Tema morado' ? 'dark' : 'light';
        setTheme(newTheme);
        await AsyncStorage.setItem('appTheme', newTheme);
    };

    const themeName: ThemeName = theme === 'dark' ? 'Tema morado' : 'Tema azul';

    useEffect(() => {
        const loadTheme = async () => {
            const storedTheme = await AsyncStorage.getItem('appTheme');
            if (storedTheme === 'light' || storedTheme === 'dark') {
                setTheme(storedTheme);
            } else {
                const systemTheme = Appearance.getColorScheme();
                setTheme(systemTheme === 'dark' ? 'dark' : 'light');
            }
        };
        loadTheme();
    }, []);

    const toggleTheme = async () => {
        const newTheme = theme === 'light' ? 'dark' : 'light';
        setTheme(newTheme);
        await AsyncStorage.setItem('appTheme', newTheme);
    };

    return (
        <ThemeContext.Provider value={{ theme, toggleTheme, themeName, setThemeByName }}>
            {children}
        </ThemeContext.Provider>
    );
};

export const useTheme = () => useContext(ThemeContext);

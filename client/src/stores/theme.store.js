import React, { createContext, useContext, useState, useEffect } from 'react';
import { STORAGE_KEYS } from '../constants/storage';
import { storage } from '../lib/storage';

export const COLOR_PALETTES = {
  red: {
    id: 'red',
    name: 'Eva Crimson Red',
    badge: 'bg-[#c8102e]',
    bannerGradient: 'bg-gradient-to-r from-[#5a0815] via-[#881337] to-[#c8102e]',
    bannerText: 'text-[#5a0815]',
    primary: '#c8102e',
    primaryHover: '#a50d24',
    primaryBgClass: 'bg-[#c8102e] hover:bg-[#a50d24]',
    primaryTextClass: 'text-[#c8102e]',
    primaryBorderClass: 'border-[#c8102e]',
    logoDark: '#4c0519',
    logoAccent: '#c8102e',
    subtleBg: 'bg-rose-50',
    subtleText: 'text-rose-700',
    glowColor: '#881337',
    glowColor2: '#a50d24',
    potColor: '#4c0519',
  },
  sky: {
    id: 'sky',
    name: 'Sky Blue',
    badge: 'bg-[#00a2ff]',
    bannerGradient: 'bg-gradient-to-r from-[#082672] via-[#092b82] to-[#103fa7]',
    bannerText: 'text-[#082672]',
    primary: '#00a2ff',
    primaryHover: '#0091e6',
    primaryBgClass: 'bg-[#00a2ff] hover:bg-[#0091e6]',
    primaryTextClass: 'text-[#00a2ff]',
    primaryBorderClass: 'border-[#00a2ff]',
    logoDark: '#082672',
    logoAccent: '#00a2ff',
    subtleBg: 'bg-sky-50',
    subtleText: 'text-sky-700',
    glowColor: '#143c9e',
    glowColor2: '#1c48af',
    potColor: '#1a42a8',
  },
  emerald: {
    id: 'emerald',
    name: 'Emerald Jade',
    badge: 'bg-emerald-500',
    bannerGradient: 'bg-gradient-to-r from-[#03362a] via-[#064e3b] to-[#04664e]',
    bannerText: 'text-[#064e3b]',
    primary: '#059669',
    primaryHover: '#047857',
    primaryBgClass: 'bg-[#059669] hover:bg-[#047857]',
    primaryTextClass: 'text-[#059669]',
    primaryBorderClass: 'border-[#059669]',
    logoDark: '#064e3b',
    logoAccent: '#059669',
    subtleBg: 'bg-emerald-50',
    subtleText: 'text-emerald-700',
    glowColor: '#075e46',
    glowColor2: '#0d765a',
    potColor: '#04362a',
  },
  violet: {
    id: 'violet',
    name: 'Royal Violet',
    badge: 'bg-purple-600',
    bannerGradient: 'bg-gradient-to-r from-[#1c0840] via-[#2e1065] to-[#491079]',
    bannerText: 'text-[#2e1065]',
    primary: '#7c3aed',
    primaryHover: '#6d28d9',
    primaryBgClass: 'bg-[#7c3aed] hover:bg-[#6d28d9]',
    primaryTextClass: 'text-[#7c3aed]',
    primaryBorderClass: 'border-[#7c3aed]',
    logoDark: '#2e1065',
    logoAccent: '#7c3aed',
    subtleBg: 'bg-purple-50',
    subtleText: 'text-purple-700',
    glowColor: '#3b0764',
    glowColor2: '#581c87',
    potColor: '#1e053a',
  },
  teal: {
    id: 'teal',
    name: 'Ocean Teal',
    badge: 'bg-teal-500',
    bannerGradient: 'bg-gradient-to-r from-[#022622] via-[#042f2e] to-[#0f6b64]',
    bannerText: 'text-[#042f2e]',
    primary: '#0d9488',
    primaryHover: '#0f766e',
    primaryBgClass: 'bg-[#0d9488] hover:bg-[#0f766e]',
    primaryTextClass: 'text-[#0d9488]',
    primaryBorderClass: 'border-[#0d9488]',
    logoDark: '#042f2e',
    logoAccent: '#0d9488',
    subtleBg: 'bg-teal-50',
    subtleText: 'text-teal-700',
    glowColor: '#115e59',
    glowColor2: '#134e4a',
    potColor: '#03201e',
  },
};

const ThemeContext = createContext(null);

export function ThemeProvider({ children }) {
  const [theme, setTheme] = useState(() => storage.get(STORAGE_KEYS.THEME_MODE, 'light'));
  // Set default to red as requested by user
  const [colorTheme, setColorTheme] = useState(() => {
    return 'red';
  });

  useEffect(() => {
    storage.set(STORAGE_KEYS.THEME_MODE, theme);
    if (theme === 'dark') {
      document.documentElement.classList.add('dark');
    } else {
      document.documentElement.classList.remove('dark');
    }
  }, [theme]);

  useEffect(() => {
    storage.set('ps_color_theme', colorTheme);
  }, [colorTheme]);

  const toggleTheme = () => {
    setTheme((prev) => (prev === 'light' ? 'dark' : 'light'));
  };

  const activePalette = COLOR_PALETTES[colorTheme] || COLOR_PALETTES.red;

  const value = {
    theme,
    setTheme,
    toggleTheme,
    isDark: theme === 'dark',
    colorTheme,
    setColorTheme,
    palette: activePalette,
  };

  return React.createElement(ThemeContext.Provider, { value }, children);
}

export function useThemeStore() {
  const context = useContext(ThemeContext);
  if (!context) {
    throw new Error('useThemeStore must be used within a ThemeProvider');
  }
  return context;
}

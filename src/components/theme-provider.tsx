// src/components/theme-provider.tsx
"use client";

import { ThemeProvider as NextThemeProvider } from "next-themes";

const ThemeProvider = ({ children }: { children: React.ReactNode }) => {
  return <NextThemeProvider>{children}</NextThemeProvider>;
};

export default ThemeProvider;

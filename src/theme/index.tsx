import { FC, useEffect, useMemo, useState } from "react";
import { CssBaseline, PaletteMode, ThemeOptions } from "@mui/material";
import { createTheme, ThemeProvider } from "@mui/material/styles";
import { useThemeSwitch } from "../hooks/switchTheme";

declare module "@mui/material/styles" {
  interface BreakpointOverrides {
    xs: true;
    sm: true;
    smd: true;
    md: true;
    lg: true;
    xl: true;
    mobile: false;
    tablet: false;
    laptop: false;
    desktop: false;
  }

  interface Palette {
    regular: Palette["primary"];
  }
}

const getDesignTokens = (mode: PaletteMode): ThemeOptions => ({
  breakpoints: {
    values: {
      xs: 0,
      sm: 600,
      smd: 992,
      md: 1152,
      lg: 1200,
      xl: 1536,
    },
  },
  palette: {
    mode,
    ...(mode === "light"
      ? {
        // palette values for light mode
        primary: {
          main: "#fff",
        },
        info: {
          main:'#fff',
          light: '#f6383a',
          dark: '#eac074'
        },
        background: {
          default: "#fff",
          paper: "#fff",
        },
        text: {
          primary: "#fff",
          secondary: "#fff",
        },
      }
      : {
        // palette values for dark mode
        primary: {
          main: "#fff",
        },
        info: {
          main:'#fff',
          light: '#1b2564',
          dark: '#922f5b'
        },
        background: {
          default: "#000",
          paper: "#fff",
        },
        text: {
          primary: "#fff",
          secondary: "#fff",
        },
      }),
  },
});

const Theme: FC = ({ children }) => {
  const [mode] = useThemeSwitch();

  const theme = useMemo(
    () => createTheme(getDesignTokens(mode as PaletteMode)),
    [mode]
  );

  useEffect(() => {
    console.log("theme:", mode);
  }, [mode]);

  return (
    <>
      <ThemeProvider theme={theme}>
        {children}
        <CssBaseline />
      </ThemeProvider>
    </>
  );
};

export default Theme;

import { createContext, useState, useMemo } from "react";
import { createTheme } from "@mui/material";

export const tokens = (mode) => ({
  ...(mode === "dark"
      ? {
          gray: {
            100: "#e0e0e0",
            200: "#c2c2c2",
            300: "#a3a3a3",
            400: "#858585",
            500: "#666666",
            600: "#525252",
            700: "#3d3d3d",
            800: "#292929",
            900: "#141414",
          },

          primary: {
            100: "#d0d1d5",
            200: "#a0a4ab",
            300: "#717681",
            400: "#414957",
            500: "#121b2d",
            600: "#0e1624",
            700: "#0b101b",
            800: "#070b12",
            900: "#040509",
          },
          greenAccent: {
            100: "#eef5ee",
            200: "#deebde",
            300: "#cde2cd",
            400: "#bdd8bd",
            500: "#acceac",
            600: "#8aa58a",
            700: "#677c67",
            800: "#455245",
            900: "#222922",
          },
          redAccent: {
            100: "#f8dcdb",
            200: "#f1b9b7",
            300: "#e99592",
            400: "#e2726e",
            500: "#db4f4a",
            600: "#af3f3b",
            700: "#832f2c",
            800: "#58201e",
            900: "#2c100f",
          },
          blueAccent: {
            100: "#e1e2fe",
            200: "#c3c6fd",
            300: "#a4a9fc",
            400: "#868dfb",
            500: "#6870fa",
            600: "#535ac8",
            700: "#3e4396",
            800: "#2a2d64",
            900: "#151632",
          },
        }
      : {
          gray: {
            100: "#141414",
            200: "#292929",
            300: "#3d3d3d",
            400: "#525252",
            500: "#666666",
            600: "#858585",
            700: "#a3a3a3",
            800: "#c2c2c2",
            900: "#e0e0e0",
          },

          primary: {
            100: "#040509",
            200: "#070b12",
            300: "#0b101b",
            400: "#f2f0f0",
            500: "#121b2d",
            600: "#414957",
            700: "#717681",
            800: "#a0a4ab",
            900: "#d0d1d5",
          },
          greenAccent: {
            100: "#222922",
            200: "#455245",
            300: "#677c67",
            400: "#8aa58a",
            500: "#acceac",
            600: "#bdd8bd",
            700: "#cde2cd",
            800: "#deebde",
            900: "#eef5ee",
          },
          redAccent: {
            100: "#2c100f",
            200: "#58201e",
            300: "#832f2c",
            400: "#af3f3b",
            500: "#db4f4a",
            600: "#e2726e",
            700: "#e99592",
            800: "#f1b9b7",
            900: "#f8dcdb",
          },
          blueAccent: {
            100: "#151632",
            200: "#2a2d64",
            300: "#3e4396",
            400: "#535ac8",
            500: "#6870fa",
            600: "#868dfb",
            700: "#a4a9fc",
            800: "#c3c6fd",
            900: "#e1e2fe",
          },
        }
  ),
});

export const themeSettings = (mode) => {
  const colors = tokens(mode);

  return {
    palette: {
      mode: mode,
      ...(mode === "dark"
        ? {
            primary: {
              main: colors.primary[500],
            },
            secondary: {
              main: colors.greenAccent[500],
            },
            neutral: {
              dark: colors.gray[700],
              main: colors.gray[500],
              light: colors.gray[100],
            },
            background: {
              default: colors.primary[500],
            },
          }
        : {
            primary: {
              main: colors.primary[100],
            },
            secondary: {
              main: colors.greenAccent[500],
            },
            neutral: {
              dark: colors.gray[700],
              main: colors.gray[500],
              light: colors.gray[100],
            },
            background: {
              default: "#fcfcfc",
            },
          }),
    },
    typography: {
      fontFamily: ["Source Sans Prop", "sans-serif"].join(","),
      fontSize: 12,
      h1: {
        fontFamily: ["Source Sans Prop", "sans-serif"].join(","),
        fontSize: 40,
      },
      h2: {
        fontFamily: ["Source Sans Prop", "sans-serif"].join(","),
        fontSize: 32,
      },
      h3: {
        fontFamily: ["Source Sans Prop", "sans-serif"].join(","),
        fontSize: 24,
      },
      h4: {
        fontFamily: ["Source Sans Prop", "sans-serif"].join(","),
        fontSize: 20,
      },
      h5: {
        fontFamily: ["Source Sans Prop", "sans-serif"].join(","),
        fontSize: 16,
      },
      h6: {
        fontFamily: ["Source Sans Prop", "sans-serif"].join(","),
        fontSize: 14,
      },
    },
  };
};

// context for color mode

export const ColorModeContext = createContext({
  toggleColorMode: () => {},
});

export const useMode = () => {
  const [mode, setMode] = useState("dark");

  const colorMode = useMemo(
    () => ({
      toggleColorMode: () =>
        setMode((prev) => (prev === "light" ? "dark" : "light")),
    }),
    []
  );

  const theme = useMemo(() => createTheme(themeSettings(mode)), [mode]);
return [theme, colorMode]
};

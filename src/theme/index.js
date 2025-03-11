import { createTheme } from "@mui/material";

export const getTheme = (mode) => {
  return createTheme({
    palette: {
      mode: mode,
      ...(mode === "dark"
        ? {
            background: {
              default: "#0b1437",
            },
            primary: {
              dark: "#0b1437",
              main: "#111c44",
              light: "rgba(255, 255, 255, 0.16)",
              extraLight: "rgba(255, 255, 255, 0.06)",
              contrastText: "#FFFFFF",
            },
            secondary: {
              main: "#7551ff",
              dark: "#190793",
              light: "#4299e1",
              contrastText: "#A3AED0",
            },
            success: {
              main: "#01B574",
            },
            error: {
              main: "#EE5D50",
            },
          }
        : {
            background: {
              default: "#F4F7FE",
            },
            primary: {
              dark: "#F4F7FE",
              main: "#FFFFFF",
              light: "rgba(135, 140, 189, 0.3)",
              extraLight: "#F4F7FE",
              contrastText: "#0b1437",
            },
            secondary: {
              main: "#7551ff",
              dark: "#190793",
              light: "#4299e1",
              contrastText: "#A3AED0",
            },
            success: {
              main: "#01B574",
            },
            error: {
              main: "#EE5D50",
            },
          }),
    },
  });
};

export default getTheme;

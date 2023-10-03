import { ThemeOptions } from "@mui/material";

export const themeColors = {
  primary: {
    main: "#333",
    light: "#D9D9D9",
    dark: "#2B2525",
  },
  secondary: {
    main: "#5FD7EC",
    light: "#DDE7F0",
    dark: "#45ACCA",
    contrastText: "#000",
  },
  warning: {
    main: "#F8920C",
    dark: "#D57308",
    light: "#FAB547",
    contrastText: "#FFFFFF",
  },
  error: {
    main: "#DE1F20",
    dark: "#BE1626",
    light: "#EB5F53",
    contrastText: "#FFFFFF",
  },
};

const themeOptions = (): ThemeOptions => {
  return {
    palette: themeColors,
  };
};
export default themeOptions;

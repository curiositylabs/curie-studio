import { CssBaseline, ThemeProvider as MuiThemeProvider, createTheme, responsiveFontSizes } from "@mui/material";
import { ReactNode } from "react";
import themeOptions from "./themeOptions";
import overrides from "./overrides";
import typography from "./typography";
import type {} from '@mui/lab/themeAugmentation';


interface Props {
  children: ReactNode;
}

const ThemeProvider = ({ children }: Props) => {
  // Core Theme options
  const coreThemeConfig = themeOptions();

  // Pass ThemeOptions to createTheme Function to create partial theme without component overrides
  let theme = createTheme(coreThemeConfig);

  // Continue theme creation and pass merged component overrides to CreateTheme function
  theme = createTheme(theme, {
    components: {...overrides(theme)},
    typography: {...typography(theme)}
  })

  theme = responsiveFontSizes(theme);

  return (
    <MuiThemeProvider theme={theme}>
      <CssBaseline />
      {children}
    </MuiThemeProvider>
  );
};

export default ThemeProvider;

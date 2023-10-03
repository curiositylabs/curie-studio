// ** MUI Imports
import { PaletteMode } from "@mui/material";

// ** Types

type ThemeConfig = {
  mode: PaletteMode;
  appName: string;
  disableRipple: boolean;
  navigationSize: number;
  sideNavigationSize: number;
};

const themeConfig: ThemeConfig = {
  // ** Layout Configs
  appName: "Curiosity Labs Studio" /* App Name */,
  mode: "light" /* light | dark */,

  // ** Navigation (Menu) Configs
  navigationSize: 250 /* Number in PX(Pixels) /*! Note: This is for Vertical navigation menu only */,
  sideNavigationSize: 18 /* Number in vw(Viewport width) /*! Note: This is for Side navigation menu in the main content only */,
  // ** Other Configs
  disableRipple: false /* true | false */,
};

export default themeConfig;

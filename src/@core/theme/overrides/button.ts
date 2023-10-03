import { Theme } from "@mui/material";
import themeConfig from "../themeConfig";

const button = (_theme: Theme) => {
    return {
      MuiButtonBase: {
        defaultProps: {
          disableRipple: themeConfig.disableRipple,
        },
      },
    };
}

export default button;
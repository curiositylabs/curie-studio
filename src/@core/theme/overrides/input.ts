import { Theme } from "@mui/material";

const input = (_theme: Theme) => {
    return {
      MuiInputBase: {
        styleOverrides: {
          input: ({ ownerState }: any) => ({
            ...(ownerState.size === "extraSmall" && {
              height: "0.75rem",
              fontSize: "14px",
              padding: "8px 12px !important",
            }),
          }),
          inputMultiline: {
            paddingLeft: "0 !important",
            paddingRight: "0 !important",
          },
        },
      },
    };
}

export default input;
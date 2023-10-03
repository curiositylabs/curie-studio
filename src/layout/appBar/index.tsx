import { ReactNode } from "react";

import { styled, useTheme } from "@mui/material/styles";
import MuiAppBar, { AppBarProps } from "@mui/material/AppBar";
import MuiToolbar, { ToolbarProps } from "@mui/material/Toolbar";
import AppBarContent from "./AppBarContent";

interface Props {
  toggleNavVisibility: () => void;
}

const AppBar = styled(MuiAppBar)<AppBarProps>(({ theme }) => ({
  transition: "none",
  alignItems: "center",
  justifyContent: "center",
  padding: theme.spacing(0, 6),
  backgroundColor: "#333",
  color: "#fff",
  minHeight: theme.mixins.toolbar.minHeight,
  [theme.breakpoints.down("sm")]: {
    paddingLeft: theme.spacing(4),
    paddingRight: theme.spacing(4),
  },
}));

const Toolbar = styled(MuiToolbar)<ToolbarProps>(() => ({
  width: "100%",
  padding: `15px !important`,
}));

const LayoutAppBar = (props: Props) => {
  const { toggleNavVisibility } = props;

  return (
    <AppBar
      elevation={0}
      color="default"
      className="layout-navbar"
      position="sticky"
      sx={{
        flexShrink: 0,
      }}
    >
      <Toolbar className="navbar-content-container">
        <AppBarContent toggleNavVisibility={toggleNavVisibility} />
        {/* {(appBarContent && appBarContent(props)) || null} */}
      </Toolbar>
    </AppBar>
  );
};

export default LayoutAppBar;

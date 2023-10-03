import { ReactNode, useState } from "react";

// ** MUI Import
import List from "@mui/material/List";
import Box from "@mui/material/Box";

import Drawer from "./Drawer";
import VerticalNavItems from "./VerticalNavItems";
import VerticalNavHeader from "./VerticalNavHeader";

import { VerticalNavItemsType } from "@/lib/types/layout.types";

interface Props {
  navWidth: number;
  children: ReactNode;
  navVisible: boolean;
  toggleNavVisibility: () => void;
  setNavVisible: (value: boolean) => void;
  verticalNavItems?: VerticalNavItemsType;
}

const Navigation = (props: Props) => {
  return (
    <Drawer {...props}>
      <VerticalNavHeader />
      <Box sx={{ height: "100%", position: "relative", overflow: "hidden" }}>
        <Box
          sx={{
            height: "100%",
            display: "flex",
            flexDirection: "column",
            justifyContent: "space-between",
          }}
        >
          <List
            className="nav-items"
            sx={{ transition: "padding .25s ease", pr: 4.5 }}
          >
            <VerticalNavItems {...props} />
          </List>
        </Box>
      </Box>
    </Drawer>
  );
};

export default Navigation;

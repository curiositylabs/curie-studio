"use client";
import Box from "@mui/material/Box";
import IconButton from "@mui/material/IconButton";

import MenuIcon from "@mui/icons-material/Menu";
import UserDropdown from "./UserDropdown";
import { appConfig } from "@/configs/appConfig";
import Image from "next/image";
import SearchBar from "./SearchBar";

interface Props {
  toggleNavVisibility: () => void;
}

const AppBarContent = (props: Props) => {
  const { toggleNavVisibility } = props;

  return (
    <Box
      sx={{
        width: "100%",
        display: "flex",
        alignItems: "center",
        justifyContent: "space-between",
      }}
    >
      <Box
        className="actions-left"
        sx={{ mr: 2, display: "flex", alignItems: "center" }}
      >
        <IconButton
          color="inherit"
          onClick={toggleNavVisibility}
          sx={{ ml: -2.75, mr: 3.5 }}
        >
          <MenuIcon />
        </IconButton>
        <Image
          alt={appConfig.appName}
          src={appConfig.appIconWhite}
          width={120}
        />
        <SearchBar />
      </Box>
      <Box
        className="actions-right"
        sx={{ display: "flex", alignItems: "center" }}
      >
        <UserDropdown />
      </Box>
    </Box>
  );
};

export default AppBarContent;

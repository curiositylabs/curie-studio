import Link from "next/link";

import Box, { BoxProps } from "@mui/material/Box";
import { styled } from "@mui/material/styles";

import { appConfig } from "@/configs/appConfig";
import Image from "next/image";

// ** Styled Components
const MenuHeaderWrapper = styled(Box)<BoxProps>(() => ({
  display: "flex",
  alignItems: "center",
  justifyContent: "space-between",
  transition: "padding .25s ease-in-out",
}));

const StyledLink = styled(Link)({
  display: "flex",
  alignItems: "center",
  textDecoration: "none",
});

const VerticalNavHeader = () => {
  return (
    <MenuHeaderWrapper
      className="nav-header"
      margin="auto"
      marginTop={3}
      sx={{}}
    >
      <StyledLink href="/dashboard/section" passHref>
        <Image
          alt={appConfig.appName}
          src={appConfig.appIconBlack}
          width={120}
        />
      </StyledLink>
    </MenuHeaderWrapper>
  );
};

export default VerticalNavHeader;

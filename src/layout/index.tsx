"use client";
import { useState } from "react";
import Fab from "@mui/material/Fab";
import { styled } from "@mui/material/styles";
import Box, { BoxProps } from "@mui/material/Box";
import LayoutAppBar from "@/layout/appBar";
import Navigation from "@/layout/navigation";
import { ArrowUpward } from "@mui/icons-material";
import ScrollToTop from "@/@core/components/ScrollToTop";
import themeConfig from "@/@core/theme/themeConfig";
import { LayoutProps } from "@/types/layout.types";

const LayoutWrapper = styled("div")({
  height: "100%",
  display: "flex",
});

const MainContentWrapper = styled(Box)<BoxProps>({
  flexGrow: 1,
  minWidth: 0,
  display: "flex",
  height: "100vh",
  flexDirection: "column",
});

export const ContentWrapper = styled("main")(
  (props: { disablePadding?: boolean }) => ({
    flexGrow: 1,
    overflow: "auto",
    transition: "padding .25s ease-in-out",
    padding: props.disablePadding ? 0 : "1rem 1rem 0 1rem",
  })
);

const Layout = (props: LayoutProps) => {
  const { children, scrollToTop, subAppBarContent, disablePadding } = props;

  const navWidth = themeConfig.navigationSize;

  const [navVisible, setNavVisible] = useState<boolean>(false);

  const toggleNavVisibility = () => setNavVisible(!navVisible);

  return (
    <>
      <LayoutWrapper className="layout-wrapper">
        {/* Navigation Menu */}
        <Navigation
          navWidth={navWidth}
          navVisible={navVisible}
          setNavVisible={setNavVisible}
          toggleNavVisibility={toggleNavVisibility}
          {...props}
        />
        <MainContentWrapper className="layout-content-wrapper">
          <LayoutAppBar toggleNavVisibility={toggleNavVisibility} />
          {children}

          {/* Footer Component */}
          {/* <Footer {...props} /> */}
        </MainContentWrapper>
      </LayoutWrapper>

      {/* Scroll to top button */}
      {scrollToTop ? (
        scrollToTop(props)
      ) : (
        <ScrollToTop className="mui-fixed">
          <Fab color="primary" size="small" aria-label="scroll back to top">
            <ArrowUpward />
          </Fab>
        </ScrollToTop>
      )}
    </>
  );
};

export default Layout;

import { ReactNode } from "react";
import Layout, { ContentWrapper } from "@/layout";
import SectionListContainer from "./_components/SectionList";
import SectionSubAppBarContent from "./_components/SubAppBarContent";
import themeConfig from "@/@core/theme/themeConfig";

interface Props {
  children: ReactNode;
}

const DashboardLayout = async ({ children }: Props) => {
  return (
    <>
      <SectionSubAppBarContent />
      <ContentWrapper>
        <SectionListContainer />
        <div
          style={{
            marginLeft: themeConfig.sideNavigationSize + 2 + "vw",
            height: "100%",
          }}
        >
          {children}
        </div>
      </ContentWrapper>
    </>
  );
};

export default DashboardLayout;

import themeConfig from "@/@core/theme/themeConfig";
import { Paper, PaperProps } from "@mui/material";
import { styled } from "@mui/material/styles";

const SectionListWrapper = styled(Paper)<PaperProps>(({ theme }) => ({
  width: themeConfig.sideNavigationSize + "vw",
  position: "fixed",
  float: "left",
  borderRadius: "12px",
  border: "1px solid #8493A0",
  background: "#F1F1F1",
  maxHeight: "78%",
  overflow: "auto",
  ".section-list": {
    padding: "0px",
  },
  ".section-list__header": {
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    padding: "10px",
    background: theme.palette.primary.light,
    borderBottom: "1px solid #8493A0",
  },
  ".section-list__footer": {
    bottom: "0",
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    padding: "10px",
    borderTop: "1px solid #8493A0",
    background: "#F1F1F1",
    cursor: "pointer",
  },
}));

export default SectionListWrapper;

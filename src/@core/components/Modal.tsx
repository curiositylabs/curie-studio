import Dialog, { DialogProps } from "@mui/material/Dialog";
import { styled } from "@mui/material/styles";

const CustomModal = styled(Dialog)(({ theme }) => ({
  ".MuiPaper-root": {
    borderRadius: "12px",
  },
  ".MuiDialogTitle-root": {
    fontWeight: 600,
    background: "#D9D9D9",
    fontSize: "1rem",
  },
  ".MuiDialogActions-root": {
    justifyContent: "center",
    button: {
      minWidth: "150px",
    },
  },
  "& .MuiDialogContent-root": {
    padding: theme.spacing(3) + "!important",
  },
  "& .MuiDialogActions-root": {
    paddingBottom: theme.spacing(3),
  },
}));
export default CustomModal;
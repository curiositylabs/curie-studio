import { styled } from "@mui/material";
import { DateTimePicker } from "@mui/x-date-pickers";

export const DataTimePicker = styled(DateTimePicker)(({ theme }) => ({
    width: '80%',
  ".MuiInputBase-root": {
    borderRadius: "0.75rem",
    height: "2.5rem",
  },
  ".MuiInputLabel-shrink": {
    top: '0px !important',
  },
  ".MuiFormLabel-root": {
    top: "-7px",
  },
}));
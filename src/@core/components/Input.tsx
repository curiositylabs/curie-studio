import { FormGroup as MaterialFormGroup, InputLabel, styled, RadioGroup as MUIRadioGroup } from "@mui/material";
import TextField, { TextFieldProps as OriginalTextFieldProps } from '@mui/material/TextField';

// Create a new type that extends the original TextFieldProps
type TextFieldProps = OriginalTextFieldProps & {
  size?: "small" | "medium" | "extraSmall"; // Add 'extraSmall' here
  bgColor?: string;
};

const Input = styled(TextField)<TextFieldProps>(({ theme, bgColor }) => ({
  "label + &": {
    marginTop: theme.spacing(4),
  },
  "& .MuiInputBase-root": {
    borderRadius: "0.75rem",
    ...(bgColor && { backgroundColor: bgColor }),
  },
  "& .MuiInputBase-input": {
    position: "relative",
    transition: theme.transitions.create([
      "border-color",
      "background-color",
      "box-shadow",
    ]),
  },
}));

export const FormGroup = styled(MaterialFormGroup)(({ theme }) => ({
    "label + &": {
      marginTop: theme.spacing(3),
    },
    flexDirection: "row",
  }));

export const Label = styled(InputLabel)(({ theme }) => ({
  color: "inherit",
  fontSize: "1.25rem",
  fontWeight: 500,
}));

export const RadioGroup = styled(MUIRadioGroup)(({ theme }) => ({
  "label + &": {
    marginTop: theme.spacing(3),
  },
  flexDirection: "row",
}));

export default Input;

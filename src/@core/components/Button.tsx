import LoadingButton from '@mui/lab/LoadingButton';
import { styled } from "@mui/material/styles";

const Button = styled(LoadingButton)(({ theme }) => ({
    borderRadius: "12px",
}));
export default Button;
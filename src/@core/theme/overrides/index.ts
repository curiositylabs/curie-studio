import { Theme } from "@mui/material";
import MuiInput from "./input";
import MuiButton from "./button";

const Overrides = (theme: Theme) => {
    const input = MuiInput(theme);
    const button = MuiButton(theme);
    return Object.assign(input, button);
}

export default Overrides;
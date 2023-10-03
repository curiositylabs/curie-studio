import MUISelect, {
  SelectProps as OriginalSelectProps,
} from "@mui/material/Select";
import { styled } from "@mui/material/styles";
import KeyboardArrowDownIcon from "@mui/icons-material/KeyboardArrowDown";

type SelectProps = OriginalSelectProps & {
  size?: "small" | "medium" | "extraSmall"; // Add 'extraSmall' here
  bgColor?: string;
};

const SelectWrapper = styled(MUISelect)<SelectProps>(({ bgColor, size }) => ({
  borderRadius: "0.75rem",
  ...(bgColor && { backgroundColor: bgColor }),
  ".MuiSelect-select": {
    padding:
      // @ts-ignore

      size === "extraSmall"
        ? "2.5px 35px 2.5px 10px !important"
        : "0.5rem 4rem 0.5rem 1rem !important",
  },
  ".MuiSvgIcon-root": {
    // @ts-ignore
    ...(size === "extraSmall" && { fontSize: "18px" }),
  },
  ".MuiOutlinedInput-notchedOutline": {
    borderColor: "#8493A0",
  },
  ".MuiSelect-icon": {
    marginLeft: "10px",
  },
}));

const Select = (props: SelectProps) => {
  return <SelectWrapper IconComponent={KeyboardArrowDownIcon} {...props} />;
};
export default Select;

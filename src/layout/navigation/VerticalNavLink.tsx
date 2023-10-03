import Link, { LinkProps } from "next/link";
import { usePathname } from "next/navigation";

import ListItem from "@mui/material/ListItem";
import { styled } from "@mui/material/styles";
import ListItemIcon from "@mui/material/ListItemIcon";
import { Typography } from "@mui/material";

import NavIcon from "../NavIcon";
import { NavLink } from "@/types/layout.types";

interface Props {
  item: NavLink;
  navVisible?: boolean;
  toggleNavVisibility?: () => void;
}

// ** Styled Components
export const MenuNavLink = styled(Link)<LinkProps>(({ theme }) => ({
  width: "100%",
  borderTopRightRadius: 100,
  borderBottomRightRadius: 100,
  transition: "opacity .25s ease-in-out",
  textDecoration: "none",
  display: "flex",
  justifyContent: "flex-start",
  alignItems: "center",
  padding: 10,
  "&.active, &.active:hover": {
    borderLeft: "0.375rem solid #DE1F20",
  },
  "&.active .MuiTypography-root, &.active .MuiSvgIcon-root": {
    fontWeight: 600,
  },
}));

const VerticalNavLink = ({ item, navVisible, toggleNavVisibility }: Props) => {
  // ** Hooks
  const pathname = usePathname();
  console.log("pathname", pathname);
  const IconTag: any = item.icon;

  const isNavLinkActive = () => {
    if (pathname.includes(item?.path as string)) {
      return true;
    } else {
      return false;
    }
  };

  return (
    <ListItem
      disablePadding
      className="nav-link"
      sx={{ mt: 1.5, px: "0 !important" }}
    >
      <MenuNavLink
        passHref
        href={item.path === undefined ? "/" : `${item.path}`}
        className={isNavLinkActive() ? "active" : ""}
        {...(item.openInNewTab ? { target: "_blank" } : null)}
        onClick={(e) => {
          if (item.path === undefined) {
            e.preventDefault();
            e.stopPropagation();
          }
          if (navVisible && toggleNavVisibility) {
            toggleNavVisibility();
          }
        }}
        sx={{
          pl: 5.5,
          ...(item.disabled
            ? { pointerEvents: "none" }
            : { cursor: "pointer" }),
        }}
      >
        <ListItemIcon
          sx={{
            mr: 2.5,
            color: "text.primary",
            transition: "margin .25s ease-in-out",
            minWidth: 0,
          }}
        >
          <NavIcon icon={IconTag} />
        </ListItemIcon>
        <Typography noWrap={true}>{item.title}</Typography>
      </MenuNavLink>
    </ListItem>
  );
};

export default VerticalNavLink;

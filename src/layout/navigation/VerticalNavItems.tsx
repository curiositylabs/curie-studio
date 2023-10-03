import VerticalNavLink from "./VerticalNavLink";

import HomeIcon from "@mui/icons-material/GridView";
import { NavLink, VerticalNavItemsType } from "@/types/layout.types";

const navigationItems: VerticalNavItemsType = [
  {
    title: "Home",
    icon: HomeIcon,
    path: "/dashboard/section",
  },
];

interface Props {
  navVisible?: boolean;
}

const VerticalNavItems = (props: Props) => {
  const RenderMenuItems = navigationItems.map(
    (item: NavLink, index: number) => {
      return <VerticalNavLink {...props} key={index} item={item} />;
    }
  );

  return <>{RenderMenuItems}</>;
};

export default VerticalNavItems;

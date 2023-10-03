import { ElementType, ReactElement, ReactNode } from "react";

export type ThemeColor =
  | "primary"
  | "secondary"
  | "error"
  | "warning"
  | "info"
  | "success";

export type NavLink = {
  path?: string;
  title: string;
  action?: string;
  disabled?: boolean;
  openInNewTab?: boolean;
  icon?: string | string[] | ReactNode | ElementType;
};

export type NavSectionTitle = {
  sectionTitle: string;
  action?: string;
  subject?: string;
};

export type VerticalNavItemsType = NavLink[];

export type LayoutProps = {
  children: ReactNode;
  disablePadding?: boolean;
  verticalNavItems?: VerticalNavItemsType;
  scrollToTop?: (props?: any) => ReactNode;
  footerContent?: (props?: any) => ReactNode;
  appBarContent?: ReactNode;
  subAppBarContent?: ReactNode;
};

export type BlankLayoutProps = {
  children: ReactNode;
};

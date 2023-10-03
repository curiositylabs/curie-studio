import { ReactNode } from "react";
import Layout from "@/layout";
import { getPathname } from "@/lib/utils/server.util";

interface Props {
  children: ReactNode;
}

function isTopicPath(pathname: string) {
  // The regular expression checks for the path: /dashboard/topic/:topicId
  return /^\/dashboard\/topic\/[^\/]+$/.test(pathname);
}

function isSectionPath(pathname: string) {
  // The regular expression checks for the path: /dashboard/topic/:topicId
  return /^\/dashboard\/section\/[^\/]+$/.test(pathname);
}

const DashboardLayout = ({ children }: Props) => {
  const pathname = getPathname();
  return <Layout disablePadding>{children}</Layout>;
};

export default DashboardLayout;

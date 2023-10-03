"use server";
import { headers } from "next/headers";

export const getPathname = () => {
  "use server";
  const headersList = headers();

  const url = headersList.get("x-url") || "";

  if (url) {
    const urlObj = new URL(url);
    return urlObj.pathname;
  }
  return "";
};

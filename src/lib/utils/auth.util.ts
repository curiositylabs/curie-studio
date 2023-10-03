import authOptions from "@/app/api/auth/[...nextauth]/options";
import { getServerSession } from "next-auth";
import { cookies, headers } from "next/headers";

export const getServerSessionForActions = async () => {
  const req = {
    headers: Object.fromEntries(headers() as Headers),
    cookies: Object.fromEntries(
      cookies()
        .getAll()
        .map((c) => [c.name, c.value])
    ),
  };
  const res = { getHeader() {}, setCookie() {}, setHeader() {} };

  // @ts-ignore - The type used in next-auth for the req object doesn't match
  const session = await getServerSession(req, res, authOptions);
  return session;
};

export const getTokenForActions = async () => {
  const session = await getServerSessionForActions();
  return session?.user?.token;
};

export const getSessionToken = async () => {
  const session = await getServerSession(authOptions);
  return session?.user?.token;
};

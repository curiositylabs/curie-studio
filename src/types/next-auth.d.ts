import { JWT } from "next-auth/jwt";
import NextAuth from "next-auth/next";

declare module "next-auth" {
  interface Session {
    user: {
      token: string;
      username: string;
    };
  }
}

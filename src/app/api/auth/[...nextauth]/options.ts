import { AuthOptions } from "next-auth";
import GitHubProvider from "next-auth/providers/github";
import CredentialsProvider from "next-auth/providers/credentials";
import { makeServerRequest } from "@/lib/utils/api.util";

const authOptions: AuthOptions = {
  providers: [
    CredentialsProvider({
      name: "Credentials",
      credentials: {
        username: {
          label: "Username:",
          type: "text",
          placeholder: "Enter username",
          value: "admin",
        },
        password: {
          label: "Password:",
          type: "password",
          placeholder: "Enter passowrd",
          value: "admin123",
        },
      },
      async authorize(credentials) {
        const { username, password } = credentials as {
          username: string;
          password: string;
        };
        if (!username || !password) return null;
        try {
          const payload = {
            username,
            password,
          };
          const res = await makeServerRequest("/authenticate", "POST", payload);
          const user = await makeServerRequest(
            "/profile",
            "GET",
            null,
            {},
            true,
            undefined,
            res?.token
          );
          if (user) {
            return { ...user, ...res };
          } else {
            return null;
          }
        } catch (error: any) {
          throw new Error(error.message || "Failed to Login");
        }
      },
    }),
  ],
  session: {
    strategy: "jwt",
    maxAge: 5 * 60,
  },
  callbacks: {
    jwt: async ({ token, user }) => {
      return { ...token, ...user };
    },
    session: async ({ session, token, user }) => {
      session.user = token as any;
      return session;
    },
  },
  theme: {
    colorScheme: "light",
  },
  pages: {
    signIn: "/signin",
  },
};

export default authOptions;

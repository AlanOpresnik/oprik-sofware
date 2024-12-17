// next-auth.d.ts
import NextAuth, { DefaultSession, JWT } from "next-auth";

declare module "next-auth" {
  interface Session {
    user: {
      id: string; // Add id here
    } & DefaultSession["user"];
  }

  interface JWT {
    id: string; // Add id here
  }
}

import NextAuth from "next-auth";
import Google from "next-auth/providers/google";
import Github from "next-auth/providers/github";

export const { handlers, signIn, signOut, auth } = NextAuth({
  providers: [
    Google({
      clientId: process.env.AUTH_GOOGLE_ID!,
      clientSecret: process.env.AUTH_GOOGLE_SECRET!,
    }),
    Github({
      clientId: process.env.AUTH_GITHUB_ID!,
      clientSecret: process.env.AUTH_GITHUB_SECRET!,
    }),
  ],
  callbacks: {
    authorized: async ({ auth }) => {
      return !!auth;
    },

    redirect: async ({ url, baseUrl }) => {
      console.log("Auth redirect called", { url, baseUrl });
      return baseUrl;
    },
  },
  pages: {
    signIn: "/login",
  },
  trustHost: true,
  logger: {
    error(code) {
      console.error("AUTH ERROR", code); // 👈 Log error
    },
  },
});

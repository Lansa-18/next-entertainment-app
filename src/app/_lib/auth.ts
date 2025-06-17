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
    async signIn({ user, account }) {
      console.log("SignIn callback:", {
        user: user.email,
        account: account?.provider,
      });
      return true;
    },
    async redirect({ url, baseUrl }) {
      console.log("Redirect callback:", { url, baseUrl });
      const redirectUrl = url.startsWith("/") ? `${baseUrl}${url}` : baseUrl;
      console.log("Redirecting to:", redirectUrl);
      return redirectUrl;
    },
    async session({ session }) {
      console.log("Session callback:", { session: session.user?.email });
      return session;
    },
  },
  pages: {
    signIn: "/login",
  },

  // Adding these for production
  useSecureCookies: process.env.NODE_ENV === "production",
  trustHost: true,
  logger: {
    error(code) {
      console.error("AUTH ERROR", code);
    },
  },
});

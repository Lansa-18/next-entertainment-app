// import { auth } from "@/app/_lib/auth";
// import { NextResponse } from "next/server";

// export default auth((req) => {
//   const isAuthenticated = !!req.auth;
//   const path = req.nextUrl.pathname;

//   const isAuthPath = path === 'login' || path === 'signup';

//   if (isAuthPath) {
//     if (isAuthenticated) {
//       return NextResponse.redirect(new URL('/', req.url));
//     }

//     return NextResponse.next();
//   } 

//   if (!isAuthenticated) {
//     return NextResponse.redirect(new URL('/login', req.url));
//   }

//   return NextResponse.next()
// })

// export const config = {
//   matcher: [
//     "/((?!api|_next/static|_next/image|favicon.ico|login|signup).*)"
//   ],
// };


// middleware.ts
import { getToken } from "next-auth/jwt";
import { NextResponse } from "next/server";
import type { NextRequest } from "next/server";

export async function middleware(req: NextRequest) {
  const token = await getToken({ req, secret: process.env.NEXTAUTH_SECRET });
  const isAuthenticated = !!token;
  const { pathname } = req.nextUrl;

  const isAuthPath = pathname === "/login" || pathname === "/signup";

  if (isAuthPath && isAuthenticated) {
    return NextResponse.redirect(new URL("/", req.url));
  }

  if (!isAuthenticated && !isAuthPath) {
    return NextResponse.redirect(new URL("/login", req.url));
  }

  return NextResponse.next();
}

export const config = {
  matcher: ["/((?!api|_next/static|_next/image|favicon.ico).*)"],
};

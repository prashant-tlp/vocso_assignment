
import { NextResponse } from "next/server";

export function middleware(request) {
  // console.log("middleware",request)
  const path = request.nextUrl.pathname;
  const appSession = request.cookies.get("appSession"); 
  // console.log("appSession",appSession)

  if (path === "/" && appSession) {
    return NextResponse.redirect(new URL("/user", request.url));
  }

  if (!appSession && path !== "/login") {
    return NextResponse.redirect(new URL("/login", request.url));
  }

  return NextResponse.next();
}

export const config = {
  matcher: ["/((?!api|_next/static|_next/image|favicon.ico).*)"],
};

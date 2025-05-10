import { NextRequest, NextResponse } from "next/server";

export const middleware = (request: NextRequest) => {
  const isAuthenticated = request.cookies.get("token");

  if (!isAuthenticated && request.nextUrl.pathname.startsWith("/admin")) {
    return NextResponse.redirect(new URL("/login", request.url));
  }

  return NextResponse.next();
};

export const config = {
  matcher: ["/about/:path*",],
};

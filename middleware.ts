import type { NextRequest } from "next/server";
import { NextResponse } from "next/server";

export function middleware(request: NextRequest) {
  const host = request.headers.get("host")?.toLowerCase() ?? "";

  if (host === "refil.grungehotel.com.kz") {
    const url = request.nextUrl.clone();
    const pathname = url.pathname === "/" ? "" : url.pathname;

    url.pathname = `/refil-site${pathname}`;
    return NextResponse.rewrite(url);
  }

  return NextResponse.next();
}

export const config = {
  matcher: ["/((?!_next|favicon.ico|robots.txt|sitemap.xml).*)"],
};

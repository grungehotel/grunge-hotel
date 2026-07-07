import type { NextRequest } from "next/server";
import { NextResponse } from "next/server";

const REFIL_HOST = "refil.grungehotel.com.kz";

export function proxy(request: NextRequest) {
  const host = request.headers.get("host")?.toLowerCase() ?? "";

  if (host !== REFIL_HOST) {
    return NextResponse.next();
  }

  const url = request.nextUrl.clone();
  url.pathname = `/refil-site${url.pathname === "/" ? "" : url.pathname}`;

  return NextResponse.rewrite(url);
}

export const config = {
  matcher: ["/((?!_next|favicon.ico|robots.txt|sitemap.xml).*)"],
};

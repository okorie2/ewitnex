import { NextRequest, NextResponse } from "next/server";

export function middleware(req: NextRequest, res: NextResponse) {
  const auth = req.cookies.get("auth");

  // if (req.nextUrl.pathname.startsWith("/dashboard")) {
  //   if (!auth) {
  //     return NextResponse.redirect(
  //       new URL(`/auth/signin?redirect=y&src=${req.url}`, req.url)
  //     );
  //   }
  // }

  const checkedRoutes = [
    "/events",
    "/how-it-works",
    "/onboarding",
    "/about",
    "/auth",
  ];
  const isRouteChecked = checkedRoutes.some((prefix) =>
    req.nextUrl.pathname.includes(prefix)
  );
  if (isRouteChecked || req.nextUrl.pathname === "/") {
    if (auth) {
      return NextResponse.redirect(new URL(`/dashboard/programs`, req.url));
    }
  }

  return NextResponse.next();
}

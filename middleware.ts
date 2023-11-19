import { NextRequest, NextResponse } from "next/server";

export function middleware(req: NextRequest, res: NextResponse) {
  const auth = req.cookies.get('auth')
  if (req.nextUrl.pathname.startsWith("/dashboard")) {
    if (!auth) {
      return NextResponse.redirect(new URL (`/auth/signin?redirect=y&src=${req.url}`, req.url));
    }
  }

  return NextResponse.next();
}


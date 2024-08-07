import auth from "@/lib/auth";
import { NextResponse } from "next/server";
import type { NextRequest } from "next/server";

export async function middleware(request: NextRequest) {
  let session: any = request.cookies.get("loggedin")?.value;
  if (request.nextUrl.pathname.startsWith("/dashboard")) {
    if (session == "true") {
      return NextResponse.rewrite(new URL("/dashboard", request.url));
    }
    return NextResponse.rewrite(new URL("/login", request.url));
  }
}

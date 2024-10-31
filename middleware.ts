import { NextResponse } from "next/server";

export default async function middleware(req: any) {
  const authToken = req.headers.authorization;
  

  if (!authToken) {
    return NextResponse.redirect(new URL("/signin", req.url));
  }
  return NextResponse.next();
}

export const config = {
  matcher: ["/cart","/admin","/profile"],
};
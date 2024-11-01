import { NextResponse } from "next/server";
import { getUserInfo } from "./app/actions/authservice";

export default async function middleware(req: any) {
  const userInfo = await getUserInfo()  

  if (!userInfo.email && !userInfo.role ) {
    return NextResponse.redirect(new URL("/signin", req.url));
  }
  return NextResponse.next();
}

export const config = {
  matcher: ["/cart","/admin","/profile"],
};
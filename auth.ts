import NextAuth from "next-auth"
import { DrizzleAdapter } from "@auth/drizzle-adapter"
import {db } from "@/drizzle/db"
 
export const { handlers, auth, signIn, signOut } = NextAuth({
  adapter: DrizzleAdapter(db),
  providers: [],
})
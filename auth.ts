import NextAuth from "next-auth"
import { PrismaAdapter } from "@auth/prisma-adapter"
import {prisma } from "@/prisma/db"
import Google from 'next-auth/providers/google' 

export const { handlers, auth, signIn, signOut } = NextAuth({
  adapter: PrismaAdapter(prisma),
  providers: [Google({
    authorization: {
      params:{
        prompt: "consent",
        access_type: "offline",
        response_type: "code"
      }
    }
  })],
  secret:process.env.AUTH_SECRET
})
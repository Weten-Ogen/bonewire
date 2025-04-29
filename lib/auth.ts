import NextAuth from "next-auth"
import Google from "next-auth/providers/google"
import {prisma} from "./prisma"
import {PrismaAdapter} from '@next-auth/prisma-adapter'




export const { handlers, auth, signIn, signOut } = NextAuth({
  providers: [Google],
  adapter:PrismaAdapter(prisma),
})
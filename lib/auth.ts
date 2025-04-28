import NextAuth from "next-auth"
import Google from "next-auth/providers/google"
import {PrismaAdapter } from '@auth/prisma-adapter' 
import {prisma} from "./prisma"
import { PrismaClient } from "@prisma/client"


export const { handlers, auth, signIn, signOut } = NextAuth({
  providers: [Google],
  adapter:PrismaAdapter(prisma as PrismaClient),
})
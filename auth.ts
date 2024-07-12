import NextAuth from "next-auth"
import Google from "next-auth/providers/google"
import { PrismaAdapter } from "@auth/prisma-adapter"
import credentials from "next-auth/providers/credentials"
import bcrypt from 'bcryptjs'
import { db } from "./db"
import Github from "next-auth/providers/github"

export const { handlers: {GET , POST}, signIn, signOut, auth } = NextAuth({
  adapter: PrismaAdapter(db),
  session: { strategy: 'jwt'},
  providers: [
    Github({
      clientId: process.env.AUTH_GITHUB_ID,
      clientSecret: process.env.AUTH_GITHUB_SECRET,
    }),
    credentials({})
  ],
})
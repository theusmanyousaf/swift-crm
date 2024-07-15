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
    Google({
      clientId: process.env.AUTH_GOOGLE_ID,
      clientSecret: process.env.AUTH_GOOGLE_SECRET,
    }),
    credentials({
      name: "credentials",
      credentials: {
        email: { label: "Email", type: "email", placeholder: "user@gmail.com" },
        password: {label: "password", type: "password"}
      },
      async authorize(credentials) {
        
        if(!credentials.email || !credentials.password) {
          throw new Error("email or password do not match")
        }

        const user = await db.user.findUnique({
          where: {
            email: credentials.email as string
          }
        })

        if(!user){
          throw new Error("email already exists");
        }

        const matcher = await bcrypt.compare(credentials.password as string, user.hashedPassword as string)

        if(!matcher){
          throw new Error("password is incorrect")
        }
        return user;
      }
    }),
  ],
  debug: process.env.NODE_ENV === "development",
})
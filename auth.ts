import NextAuth from "next-auth"
import Google from "next-auth/providers/google"
import GitHub from "next-auth/providers/github"
import { PrismaAdapter } from "@auth/prisma-adapter"
import credentials from "next-auth/providers/credentials"
import bcrypt from 'bcryptjs'
import { db } from "./db"

export const { handlers: { GET, POST }, signIn, signOut, auth } = NextAuth({
  adapter: PrismaAdapter(db),
  session: { strategy: 'jwt' },
  pages: {
    signIn: "/auth/signin"
  },
  providers: [
    GitHub,
    Google,
    credentials({
      credentials: {
        email: { label: "Email", type: "email", placeholder: "user@gmail.com" },
        password: { label: "password", type: "password" }
      },
      async authorize(credentials) {
        const user = await db.user.findUnique({
          where: {
            email: credentials.email as string
          }
        });
        if (!user) {
          throw new Error("User not registered");
        }
        const matcher = await bcrypt.compare(credentials.password as string, user.password as string);
        if (!matcher) {
          throw new Error("Invalid credentials");
        }
        return user;
      }
    })
  ],
})
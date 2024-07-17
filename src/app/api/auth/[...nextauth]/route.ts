import NextAuth from "next-auth"
import Google from "next-auth/providers/google"
import { PrismaAdapter } from "@auth/prisma-adapter"
import credentials from "next-auth/providers/credentials"
import * as bcrypt from 'bcryptjs'
import db from "../../../../../db"
import Github from "next-auth/providers/github"
import { User } from "@prisma/client"

export const { handlers: { GET, POST }, signIn, signOut, auth } = NextAuth({
    adapter: PrismaAdapter(db),
    session: { strategy: 'jwt' },
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
                password: { label: "Password", type: "password" }
            },
            async authorize(credentials) {

                const user = await db.user.findUnique({
                    where: {
                        email: credentials.email as string
                    }
                })
                const isPawordCorrect = await bcrypt.compare(credentials.password as string, user?.password as string)

                if (!user) {
                    throw new Error("User email or password is incorrect")
                }

                if (!credentials.password)
                    throw new Error("provide an email or password")
                if (!isPawordCorrect)
                    throw new Error("provide correct password")

                const { password, ...simpleUser } = user
                return simpleUser;
            }
        }),
    ],
    callbacks: {
        async jwt({ token, user }) {
            if (user) token.user = user as User
            return token;
        },

        async session({ token, session }) {
            session.user = token.user
            return session;
        },
    },
    // debug: process.env.NODE_ENV === "development",
})
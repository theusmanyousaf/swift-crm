"use server"

import { auth, signIn, signOut } from "@/auth";
import { User } from "@prisma/client";
import { db } from "../db";
import { revalidatePath } from "next/cache";
import bcrypt from 'bcryptjs'

export async function registerUser(user: Omit<User, "id" | "emailVerified" | "image" | "createdAt" | "updatedAt">) { // TypeScript utility type 'Omit' will remove id from user for type checking
    await db?.user.create({
        data: {
            ...user,
            password: await bcrypt.hash(user.password as string, 10)
        }
    })
}

export const fetchUser = async () => {
    const session = await auth();
    const loggedInUser = session?.user?.email
    try {
        const user = await db.user.findUnique({
            where: {
                email: loggedInUser as string
            }
        })
        return user;
    } catch (error) {
        console.log(error)
    }
}

export async function updateUser(user: Omit<User, "password" | "image" | "id" | "emailVerified" | "createdAt" | "updatedAt">) {
    const session = await auth();
    const loggedInUser = session?.user?.email
    try {
        await db?.user.update({
            where: {
                email: loggedInUser as string
            },
            data: {
                ...user
            }
        })
    } catch (error) {
        console.log(error)
    }
}

export const login = async (provider: string) => {
    await signIn(provider, { redirectTo: '/dashboard' });
    revalidatePath("/dashboard")
}

export const logout = async () => {
    await signOut({ redirectTo: '/' });
    revalidatePath("/")
}
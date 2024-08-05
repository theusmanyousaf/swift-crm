"use server"

import { signIn, signOut } from "@/auth";
import { User } from "@prisma/client";
import { db } from "../db";
import { revalidatePath } from "next/cache";
import bcrypt from 'bcryptjs'

export async function registerUser(user: Omit<User, "id" | "emailVerified" | "image" | "createdAt" | "updatedAt">){ // TypeScript utility type 'Omit' will remove id from user for type checking
    await db?.user.create({
        data: {
            ...user,
            password: await bcrypt.hash(user.password as string, 10)
        }
    })
}

export const login = async (provider: string) => {
    await signIn(provider, {redirectTo: '/dashboard'});
    revalidatePath("/dashboard")
}

export const logout = async () => {
    await signOut({redirectTo: '/'});
    revalidatePath("/")
}
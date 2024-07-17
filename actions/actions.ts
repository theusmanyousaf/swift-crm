"use server"

import { signIn, signOut } from "@/auth";
import { User } from "@prisma/client";
import { revalidatePath } from "next/cache";
import bcrypt from 'bcryptjs'
import { AuthError } from 'next-auth';

export async function registerUser(user: Omit<User, "id" | "emailVerified" | "image" | "createdAt" | "updatedAt">){ // TypeScript utility type 'Omit' will remove id from user for type checking
    await prisma?.user.create({
        data: {
            ...user,
            password: await bcrypt.hash(user.password, 10),
        }
    })
}

export async function authenticate(
    prevState: string | undefined,
    formData: FormData,
  ) {
    try {
      await signIn('credentials', formData);
    } catch (error) {
      if (error instanceof AuthError) {
        switch (error.type) {
          case 'CredentialsSignin':
            return 'Invalid credentials.';
          default:
            return 'Something went wrong.';
        }
      }
      throw error;
    }
  }

export const login = async (provider: string) => {
    await signIn(provider, {redirectTo: '/dashboard'});
    revalidatePath("/dashboard")
}

export const logout = async () => {
    await signOut({redirectTo: '/'});
    revalidatePath("/")
}
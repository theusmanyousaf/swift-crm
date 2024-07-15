import { z } from 'zod'

export const SignUpValidationSchema = z.object({
    name: z
        .string({required_error: "Name is required"})
        .min(3, "Name must be atleast 3 characters")
        .max(20, "Name cannot be more then 20 characters"),
    email: z
        .string({required_error: "Email is required"})
        .email()
        .min(3, "Email must be atleast 3 characters")
        .max(255, "Email cannot be more then 255 characters"),
    password: z
        .string({required_error: "Password is required"})
        .min(6, "Password must be at least 6 characters long")
        .max(255, "Password cannot be more then 255 characters")
})

export const LogInValidationSchema = z.object({
    email: z
        .string({required_error: "Email is required"})
        .email()
        .min(3, "Email must be atleast 3 characters")
        .max(255, "Email cannot be more then 255 characters"),
    password: z
        .string({required_error: "Password is required"})
        .min(6, "Password must be at least 6 characters long")
        .max(255, "Password cannot be more then 255 characters")
})

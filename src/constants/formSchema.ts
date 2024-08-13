import { z } from 'zod'

export const SignUpValidationSchema = z.object({
    name: z
        .string({ required_error: "Name is required" })
        .min(3, "Name must be atleast 3 characters")
        .max(35, "Name cannot be more then 35 characters")
        .regex(new RegExp("^([A-Za-z]+ )+[A-Za-z]+$|^[A-Za-z]+$"), "No special characters or numbers allowed!"),
    email: z
        .string({ required_error: "Email is required" })
        .email("Plese Enter a valid email address")
        .max(255, "Email cannot be more then 255 characters"),
    password: z
        .string({ required_error: "Password is required" })
        .min(6, "Password must be at least 6 characters long")
        .max(50, "Password cannot be more then 50 characters")
})

export const LogInValidationSchema = z.object({
    email: z
        .string({ required_error: "Email is required" })
        .email("Plese Enter a valid email address")
        .max(255, "Email cannot be more then 255 characters"),
    password: z
        .string({ required_error: "Please Enter Your Password" })
        .min(6, "Password must be at least 6 characters long")
})

export const UpdateProfileFormSchema = z.object({
    name: z
        .string({ required_error: "Name is required" })
        .min(3, "Name must be atleast 3 characters")
        .max(35, "Name cannot be more then 35 characters")
        .regex(new RegExp("^([A-Za-z]+ )+[A-Za-z]+$|^[A-Za-z]+$"), "No special characters or numbers allowed!"),
    email: z
        .string({ required_error: "Email is required" })
        .email("Plese Enter a valid email address")
        .max(255, "Email cannot be more then 255 characters"),
    image: z.string()
})
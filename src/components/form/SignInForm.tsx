'use client'
import { useState } from "react";
import { useRouter } from "next/navigation";
import { signIn } from "next-auth/react";
import { z } from 'zod'
import { LogInValidationSchema } from "@/constants/signUpSchema";
import { SubmitHandler, useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { FaEye, FaEyeSlash } from "react-icons/fa";
import Link from "next/link";

type InputType = z.infer<typeof LogInValidationSchema>

export default function SignInForm() {

    const router = useRouter()
    const [isvisible, setIsVisible] = useState(false)
    const toggleVisiblePassword = () => setIsVisible(val => !val)
    const { register, handleSubmit, formState: { errors, isSubmitting } } = useForm<InputType>({
        resolver: zodResolver(LogInValidationSchema)
    })
    const [data, setData] = useState({
        email: "",
        password: ""
    })

    const loginUser: SubmitHandler<InputType> = async (data) => {
        const result = await signIn("credentials", {
            redirect: false,
            email: data.email,
            password: data.password
        });
        if (!result) {
            alert(`Something we wrong`)
            return null;
        } else {
            alert("Welcome Back")
            router.push('/dashboard')
        }
    }

    return (
        <form onSubmit={handleSubmit(loginUser)} className="space-y-6">
            <div>
                <label htmlFor="email" className="block text-sm font-medium leading-6 text-gray-900">
                    Email address
                </label>
                <div className="mt-2">
                    <input
                        {...register("email")}
                        id="email"
                        name="email"
                        type="email"
                        autoComplete="email"
                        value={data.email}
                        onChange={(e) => { setData({ ...data, email: e.target.value }) }}
                        className="block w-full px-2 rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                    />
                    {errors.email?.message && <span className="text-red-500 text-[10px] font-medium">{errors.email?.message}</span>}
                </div>
            </div>

            <div>
                <div className="flex items-center justify-between">
                    <label htmlFor="password" className="block text-sm font-medium leading-6 text-gray-900">
                        Password
                    </label>
                    <div className="text-sm">
                        <Link href="/forgot-password" className="font-semibold text-purple-600 hover:text-purple-500">
                            Forgot password?
                        </Link>
                    </div>
                </div>
                <div className="mt-2 relative">
                    <input
                        {...register("password")}
                        id="password"
                        name="password"
                        type={isvisible ? "text" : "password"}
                        autoComplete="current-password"
                        value={data.password}
                        onChange={(e) => { setData({ ...data, password: e.target.value }) }}
                        className="block w-full rounded-md px-2 border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                    />
                    {isvisible ? <FaEyeSlash className="cursor-pointer absolute top-2.5 right-3 font-semibold text-gray-400 hover:text-gray-600" onClick={toggleVisiblePassword} /> : <FaEye className="cursor-pointer absolute top-2.5 right-3 font-semibold text-gray-400 hover:text-gray-600" onClick={toggleVisiblePassword} />}
                    {errors.password?.message && <span className="text-red-500 text-[10px] font-medium">{errors.password?.message}</span>}
                </div>
            </div>

            <div>
                <button
                    type="submit"
                    disabled={isSubmitting}
                    className="flex w-full justify-center rounded-md bg-purple-600 px-3 py-1.5 text-sm font-semibold leading-6 text-white shadow-sm hover:bg-purple-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600"
                >
                    {isSubmitting ? "Signing in..." : "Sign In"}
                </button>
            </div>
        </form>
    )
}

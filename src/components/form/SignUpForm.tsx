'use client'

import { useRouter } from "next/navigation";
import { useState } from "react";
import { z } from 'zod'
import { SubmitHandler, useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { SignUpValidationSchema } from "@/constants/signUpSchema";
import { FaEye, FaEyeSlash } from "react-icons/fa";
import { registerUser } from "../../../actions/auth";

type InputType = z.infer<typeof SignUpValidationSchema>

export default function SignUpForm() {

    const router = useRouter()
    const { register, handleSubmit, reset, formState: { errors } } = useForm<InputType>({
        resolver: zodResolver(SignUpValidationSchema)
    })
    const [isvisible, setIsVisible] = useState(false)
    const toggleVisiblePassword = () => setIsVisible(val => !val)
    const [data, setData] = useState({
        name: '',
        email: '',
        password: ''
    })

    const saveUser: SubmitHandler<InputType> = async (data) => {
        console.log({ data })
        const user = data
        try {
            const result = await registerUser(user)
            alert("User Registerd Successfully")
            console.log(result)
            router.push("/auth/signin")
        } catch (error) {
            alert("Something went wrong!")
            console.log(error)
        }
    }

    return (
        <form action="#" method="POST" className="space-y-6" onSubmit={handleSubmit(saveUser)}>
            <div>
                <label htmlFor="email" className="block text-sm font-medium leading-6 text-gray-900">
                    Enter Name
                </label>
                <div className="mt-2">
                    <input
                        {...register("name")}
                        id="name"
                        name="name"
                        type="text"
                        value={data.name}
                        onChange={(e) => { setData({ ...data, name: e.target.value }) }}
                        className="block w-full px-2 rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                    />
                    {errors.name?.message && <span className="text-red-500 text-[10px] font-medium">{errors.name?.message}</span>}
                </div>
            </div>

            <div>
                <label htmlFor="email" className="block text-sm font-medium leading-6 text-gray-900">
                    Enter Email
                </label>
                <div className="mt-2">
                    <input
                        {...register("email")}
                        id="email"
                        name="email"
                        type="email"
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
                        Enter Password
                    </label>
                </div>
                <div className="mt-2 relative">
                    <input
                        {...register("password")}
                        id="password"
                        name="password"
                        type={isvisible ? "text" : "password"}
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
                    className="flex w-full justify-center rounded-md bg-purple-600 px-3 py-1.5 text-sm font-semibold leading-6 text-white shadow-sm hover:bg-purple-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600"
                >
                    Sign Up
                </button>
            </div>
        </form>
    )
}

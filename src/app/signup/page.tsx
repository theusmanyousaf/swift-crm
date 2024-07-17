'use client'

import Image from "next/image";
import Link from "next/link";
import Logo from '/public/assets/Company.svg'
import { useRouter } from "next/navigation";
import { FormEvent, useState } from "react";
import { LoginGoogle } from "@/components/loginGoogle/LoginGoogle";
import { LoginGithub } from "@/components/loginGithub/LoginGithub";
import { z } from 'zod'
import { SubmitHandler, useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { registerUser } from "../../../actions/actions";
import { SignUpValidationSchema } from "@/constants/signUpSchema";
import { FaEye, FaEyeSlash } from "react-icons/fa";

type InputType = z.infer<typeof SignUpValidationSchema>

const SignUp = () => {
    const router = useRouter()
    const {register, handleSubmit, reset, formState:{errors}} = useForm<InputType>({
        resolver: zodResolver(SignUpValidationSchema)
    })
    const [isvisible, setIsVisible] = useState(false)
    const toggleVisiblePassword = () => setIsVisible(val=>!val)
    const [data, setData] = useState({
        name: '',
        email: '',
        password: ''
    })

    const saveUser: SubmitHandler<InputType> = async (data) => {
        try {
            await registerUser(data)
            alert("Success! User has been Registerd")
            router.push("/")
        } catch (error) {
            alert(`Failed to Register User! \n${error}`)
        }
    }

    return (
        <>
            <div className="flex h-screen flex-1 flex-col justify-center px-6 py-20 lg:px-8">
                <div className="sm:mx-auto sm:w-full sm:max-w-sm">
                    <Image src={Logo} alt="Logo" className="mx-auto h-12 w-auto" />
                    <h2 className="mt-4 text-center text-2xl font-bold leading-9 tracking-tight text-gray-900">
                        Create your account
                    </h2>
                </div>

                <div className="mt-10 sm:mx-auto sm:w-full sm:max-w-sm">
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
                                    onChange={(e)=>{setData({...data, name: e.target.value})}}
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
                                    onChange={(e)=>{setData({...data, email: e.target.value})}}
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
                                    type={isvisible? "text": "password"}
                                    value={data.password}
                                    onChange={(e)=>{setData({...data, password: e.target.value})}}
                                    className="block w-full rounded-md px-2 border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                                />
                                {isvisible? <FaEyeSlash className="cursor-pointer absolute top-2.5 right-3 font-semibold text-gray-400 hover:text-gray-600" onClick={toggleVisiblePassword}/> : <FaEye className="cursor-pointer absolute top-2.5 right-3 font-semibold text-gray-400 hover:text-gray-600" onClick={toggleVisiblePassword}/>}
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

                    <div className="flex py-6 items-center">
                        <div className="flex-grow border-t-2 border-gray-200"></div>
                        <span className="flex-shrink mx-5">Or continue With</span>
                        <div className="flex-grow border-t-2 border-gray-200"></div>
                    </div>

                    <div className="flex items-center gap-4 font-medium">
                        <LoginGoogle />
                        <LoginGithub />
                    </div>

                    <p className="mt-10 text-center text-sm text-gray-500">
                        Already a member?{' '}
                        <Link href="/" className="font-semibold leading-6 text-purple-600 hover:text-purple-500">
                            Sign In
                        </Link>
                    </p>
                </div>
            </div>
        </>
    )
}

export default SignUp;
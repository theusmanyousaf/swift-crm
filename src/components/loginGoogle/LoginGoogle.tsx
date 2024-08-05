"use client"
import { FcGoogle } from "react-icons/fc";
import { login } from "../../../actions/auth";

export const LoginGoogle = () => {
  return (
    <div onClick={()=> login("google")} className="flex justify-center items-center gap-2 w-full rounded-md border sm:px-12 py-1.5 shadow-sm cursor-pointer"><FcGoogle className="h-7 w-7 ml-auto" /><button className="mr-auto">Google</button></div>
  )
}
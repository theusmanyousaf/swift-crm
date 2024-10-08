"use client"
import { BsGithub } from "react-icons/bs";
import { login } from "../../../actions/auth";

export const LoginGithub = () => {
  return (
    <div onClick={()=> login("github")} className="flex justify-center items-center gap-2 w-full rounded-md border sm:px-12 py-1.5 shadow-sm cursor-pointer"><BsGithub className="h-7 w-7" /><button>GitHub</button></div>
  )
}
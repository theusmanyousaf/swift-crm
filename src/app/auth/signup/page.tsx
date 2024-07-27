import Image from "next/image";
import Logo from '/public/assets/Company.svg'
import { LoginGoogle } from "@/components/loginGoogle/LoginGoogle";
import { LoginGithub } from "@/components/loginGithub/LoginGithub";
import SignUpForm from "@/components/form/SignUpForm";
import { auth } from "@/auth";
import Link from "next/link";

export default async function SignUp() {
    const session = await auth();

    if (session) {
        return (
            <div style={{ display: "flex", justifyContent: "center", flexDirection: "column", alignItems: "center", margin: "40px auto 0" }}>
                <h1 style={{ color: "red" }}>Cannot access the contents of this page</h1>
                <h3><span style={{ color: "skyblue" }}>{session.user?.name}</span> is logged in go to <Link href="/dashboard"><button style={{ border: "1px solid skyblue", padding: "6px 10px", borderRadius: "4px", fontWeight: "bold", backgroundColor: "white", cursor: "pointer" }}>Dashboard</button></Link></h3>
            </div>
        )
    }

    return (
        <>
            <div className="flex h-screen flex-1 flex-col justify-center px-6 py-20 lg:px-8">
                <div className="sm:mx-auto sm:w-full sm:max-w-sm">
                    <Link href='/'><Image src={Logo} alt="Logo" className="mx-auto h-12 w-auto" /></Link>
                    <h2 className="mt-4 text-center text-2xl font-bold leading-9 tracking-tight text-gray-900">
                        Create your account
                    </h2>
                </div>

                <div className="mt-10 sm:mx-auto sm:w-full sm:max-w-sm">
                    <SignUpForm />

                    <div className="flex py-10 items-center">
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
                        <Link href="/auth/signin" className="font-semibold leading-6 text-purple-600 hover:text-purple-500">
                            Sign In
                        </Link>
                    </p>
                </div>
            </div>
        </>
    )
}
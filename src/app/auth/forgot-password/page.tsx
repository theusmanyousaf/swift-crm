import Image from "next/image";
import Logo from '/public/assets/Company.svg'
import { auth } from "@/auth";
import Link from "next/link";

export default async function ForgotPassword() {
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
                    <Link href='/'><Image src={Logo} alt="Logo" className="mx-auto h-14 w-auto" /></Link>
                </div>

                <div className="mt-4 sm:mx-auto sm:w-full sm:max-w-sm">
                    <form action="#" method="POST" className="space-y-6">
                        <div>
                            <label htmlFor="email" className="block text-sm font-medium leading-6 text-gray-900">
                                Enter Email address
                            </label>
                            <div className="mt-2">
                                <input
                                    id="email"
                                    name="email"
                                    type="email"
                                    required
                                    autoComplete="email"
                                    className="block w-full px-2 rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                                />
                            </div>
                        </div>

                        <div>
                            <button
                                type="submit"
                                className="flex w-full justify-center rounded-md bg-violet-500 px-3 py-1.5 text-sm font-semibold leading-6 text-white shadow-sm hover:bg-violet-600 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600"
                            >
                                Send
                            </button>
                        </div>
                    </form>

                    <p className="mt-10 text-center text-sm text-gray-500">
                        Not a member?{' '}
                        <Link href="/auth/signup" className="font-semibold leading-6 text-purple-600 hover:text-purple-500">
                            Sign Up
                        </Link>
                    </p>
                </div>
            </div>
        </>
    )
}
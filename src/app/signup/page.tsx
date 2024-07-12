import Image from "next/image";
import Logo from '/public/assets/Company.svg'
import { LoginGoogle } from "@/components/loginGoogle/LoginGoogle";
import { LoginGithub } from "@/components/loginGithub/LoginGithub";

const SignUp = () => {
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
                    <form action="#" method="POST" className="space-y-6">
                        <div>
                            <label htmlFor="email" className="block text-sm font-medium leading-6 text-gray-900">
                                Enter Email
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
                            <div className="flex items-center justify-between">
                                <label htmlFor="password" className="block text-sm font-medium leading-6 text-gray-900">
                                    Enter Password
                                </label>
                            </div>
                            <div className="mt-2">
                                <input
                                    id="password"
                                    name="password"
                                    type="password"
                                    required
                                    autoComplete="current-password"
                                    className="block w-full rounded-md px-2 border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                                />
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
                        <a href="/" className="font-semibold leading-6 text-purple-600 hover:text-purple-500">
                            Sign In
                        </a>
                    </p>
                </div>
            </div>
        </>
    )
}

export default SignUp;
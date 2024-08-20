"use client"
import UpdateProfileForm from "@/components/updateProfileForm/UpdateProfileForm"
import { toggleForm } from "@/store/slices/navSlice";
import { AppDispatch, RootState } from "@/store/store";
import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { fetchUser } from "../../../../actions/auth";
import { User } from "@prisma/client";
import Image from "next/image";

export default function Settings() {
    const dispatch: AppDispatch = useDispatch();
    const [user, setUser] = useState<User | null>()
    const formOpen = useSelector((state: RootState) => state.nav.formOpen);
    const handleFormClick = () => {
        dispatch(toggleForm())
    };

    useEffect(() => {
        const getUser = async () => {
            try {
                const userData = await fetchUser();
                if (userData) {
                    setUser(userData); // Set initial data state
                }
            } catch (error) {
                console.error("Failed to fetch user", error);
            }
        };
        getUser();
    }, []);
    
    return (
        <div className="grid items-center mt-8 mb-32">
            <div className="bg-white border-2 rounded-md md:shadow-md p-4 lg:p-10 sm:mx-auto mx-6">

                <div className="flex items-center justify-between">
                    <h2 className="text-2xl font-bold leading-7 text-gray-900">
                        Update Your Profile
                    </h2>
                    <button
                        type="button"
                        className={`rounded-md px-3 py-2 text-sm font-semibold text-white shadow-sm ${formOpen ? "bg-red-400 hover:bg-red-500" : "bg-violet-500 hover:bg-violet-600"} `}
                        onClick={handleFormClick}
                    >
                        {formOpen ? "Cancel" : "Edit Profile"}
                    </button>
                </div>

                {
                    formOpen
                        ? <UpdateProfileForm />
                        : <div className="flex lg:flex-row flex-col-reverse justify-between items-center md:items-baseline">
                            <div className="mt-10 grid grid-cols-1 gap-x-6 gap-y-8 sm:grid-cols-6">
                                <div className="sm:col-span-3">
                                    <div className="block text-sm font-semibold leading-6">Full Name:</div>
                                    <div className="mt-2 font-semibold font-albert-sans border-2 py-1.5 px-2 rounded-md">{user?.name}</div>
                                </div>

                                <div className="sm:col-span-4">
                                    <div className="block text-sm font-semibold leading-6">Email address:</div>
                                    <div className="mt-2 font-semibold font-albert-sans border-2 py-1.5 px-2 rounded-md">{user?.email}</div>
                                </div>
                            </div>

                            <div className="mt-10 grid grid-cols-1 gap-x-6 gap-y-8 sm:grid-cols-6">
                                <div className="col-span-full">
                                    <div className="block text-sm font-semibold leading-6">Profile Picture</div>
                                    <div className="mt-2 pr-5">{user?.image && <Image src={user?.image as string} alt={user?.name as string} width={300} height={300} className="w-40 h-40 rounded-full shadow-md"/>}</div>
                                </div>
                            </div>
                        </div>
                }

            </div>
        </div>
    )
}

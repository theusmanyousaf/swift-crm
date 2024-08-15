"use client";
import { FaUserCircle } from "react-icons/fa";
import { MdOutlineModeEdit } from "react-icons/md";
import Image from "next/image";
import { fetchUser, updateUser } from "../../../actions/auth";
import { useEffect, useState } from "react";
import { User } from "@prisma/client";
import { z } from "zod";
import { SubmitHandler, useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { UpdateProfileFormSchema } from "@/constants/formSchema";
import { useDispatch, useSelector } from "react-redux";
import { AppDispatch, RootState } from "@/store/store";
import { useEdgeStore } from "@/lib/edgestore";
import { toggleUplaod } from "@/store/slices/navSlice";
import { SingleImageDropzone } from "../singleImageDropzone/SingleImageDropzone";

type FormData = {
    name: string;
    email: string;
    image?: string;
    password?: string;
};

export default function UpdateProfileForm() {
    const [file, setFile] = useState<File>();
    const [user, setUser] = useState<User | null>(null);
    const [url, setUrl] = useState("");
    const [data, setData] = useState<FormData>({
        name: "",
        email: "",
        image: "",
    });

    const dispatch: AppDispatch = useDispatch();
    const { edgestore } = useEdgeStore();

    const editOpen = useSelector((state: RootState) => state.nav.editOpen);

    const handleMenuClick = () => {
        dispatch(toggleUplaod());
    };

    useEffect(() => {
        const getUser = async () => {
            try {
                const userData = await fetchUser();
                if (userData) {
                    setUser(userData);
                    setData({
                        name: userData.name ?? "",
                        email: userData.email ?? "",
                        image: userData.image ?? "",
                        password: userData.password ?? "",
                    }); // Set initial data state
                }
            } catch (error) {
                console.error("Failed to fetch user", error);
            }
        };
        getUser();
    }, []);

    const uploadImage = async (file: File) => {
        try {
            const res = await edgestore.publicFiles.upload({
                file,
            });
            return res.url; // Return the URL of the uploaded image
        } catch (error) {
            console.error("Image upload failed", error);
            throw new Error("Failed to upload image");
        }
    };

    type InputType = z.infer<typeof UpdateProfileFormSchema>;
    const {
        register,
        handleSubmit,
        formState: { errors },
    } = useForm<InputType>({
        resolver: zodResolver(UpdateProfileFormSchema),
        defaultValues: data, // Set default form values
    });

    const PasswordChangehandler = async () => { };

    console.log("user data", user);

    console.log("data1", data);
    console.log("url", url)

    const saveUser: SubmitHandler<InputType> = async (formData) => {
        try {
            const result = await updateUser(formData);
            console.log(result)
            alert("User Updated Successfully");
        } catch (error) {
            alert("Something Went Wrong!");
        }
    };

    return (
        <>
            {user && (
                <form
                    className="bg-white border-2 rounded-md md:shadow-md p-4 lg:p-10 sm:mx-auto mx-6"
                    onSubmit={handleSubmit(saveUser)}
                >
                    <div className="border-b border-gray-900/10 pb-12">
                        <h2 className="text-2xl font-bold leading-7 text-gray-900">
                            Update Your Profile
                        </h2>

                        <div className="flex lg:flex-row flex-col-reverse justify-between items-center md:items-baseline">
                            <div className="mt-10 grid grid-cols-1 gap-x-6 gap-y-8 sm:grid-cols-6">
                                <div className="sm:col-span-3">
                                    <label
                                        htmlFor="name"
                                        className="block text-sm font-medium leading-6 text-gray-900"
                                    >
                                        Full Name
                                    </label>
                                    <div className="mt-2">
                                        <input
                                            {...register("name")}
                                            id="name"
                                            name="name"
                                            type="text"
                                            onChange={(e) => {
                                                setData({ ...data, name: e.target.value });
                                            }}
                                            className="block w-full px-2 rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                                        />
                                        {errors.name?.message && (
                                            <span className="text-red-500 text-[10px] font-medium">
                                                {errors.name?.message}
                                            </span>
                                        )}
                                    </div>
                                </div>

                                <div className="sm:col-span-4">
                                    <label
                                        htmlFor="email"
                                        className="block text-sm font-medium leading-6 text-gray-900"
                                    >
                                        Email address
                                    </label>
                                    <div className="mt-2">
                                        <input
                                            {...register("email")}
                                            id="email"
                                            name="email"
                                            type="email"
                                            onChange={(e) => {
                                                setData({ ...data, email: e.target.value });
                                            }}
                                            className="block w-full px-2 rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                                        />
                                        {errors.email?.message && (
                                            <span className="text-red-500 text-[10px] font-medium">
                                                {errors.email?.message}
                                            </span>
                                        )}
                                    </div>
                                </div>
                                {user.password && (
                                    <div className="sm:col-span-4">
                                        <div
                                            className="block text-sm font-medium leading-6 text-gray-900"
                                        >
                                            Password
                                        </div>
                                        <div className="mt-2">
                                            <button
                                                id="password"
                                                type="button"
                                                className="rounded-md flex items-center bg-white px-2.5 py-1.5 text-sm font-semibold text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 hover:bg-gray-100"
                                                onClick={PasswordChangehandler}
                                            >
                                                Change Password
                                            </button>
                                        </div>
                                    </div>
                                )}
                            </div>

                            <div className="mt-10 grid grid-cols-1 gap-x-6 gap-y-8 sm:grid-cols-6">
                                <div className="col-span-full">
                                    <label
                                        htmlFor="image"
                                        className="block text-sm font-medium leading-6 text-gray-900"
                                    >
                                        Profile Picture
                                    </label>
                                    <div className="mt-2 pr-5">
                                        <SingleImageDropzone
                                            width={160}
                                            height={160}
                                            value={file ? file : (user.image as string)}
                                            onChange={(file) => {
                                                setFile(file);
                                                setData({ ...data, image: url || "" });
                                            }}
                                        />
                                        {
                                            file
                                                ? <button
                                                    type="button"
                                                    className="absolute rounded-md flex items-center bg-white px-2.5 py-1.5 text-sm text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 hover:bg-gray-50 -mt-6"
                                                    onClick={
                                                        async () => {
                                                            if (file) {
                                                                const res = await edgestore.publicFiles.upload({
                                                                    file,
                                                                });
                                                                setUrl(res?.url)
                                                            }
                                                        }
                                                    }

                                                >
                                                    Upload
                                                </button>
                                                : <button
                                                    type="button"
                                                    className="absolute rounded-md flex items-center bg-white px-2.5 py-1.5 text-sm text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 hover:bg-gray-50 -mt-6"
                                                    onClick={handleMenuClick}
                                                >
                                                    <MdOutlineModeEdit size={16} /> Edit
                                                </button>
                                        }
                                        <div
                                            onClick={handleMenuClick}
                                            className={`bg-white divide-y ring-1 ring-gray-300 divide-gray-100 rounded-sm shadow-sm dark:bg-gray-700 mt-3 text-xs ease-in w-36 ${editOpen ? "block" : "hidden"
                                                }`}
                                        >
                                            <div>
                                                <label
                                                    htmlFor="image"
                                                    className="block px-4 py-2 rounded-t-sm hover:bg-gray-100 dark:hover:bg-gray-600 dark:hover:text-white"
                                                >
                                                    Upload a Photo...
                                                    <input
                                                        id="image"
                                                        type="image"
                                                        name="image"
                                                        className="hidden"
                                                        onClick={handleMenuClick}
                                                        onChange={(e) => {
                                                            setFile(e.target.files?.[0]);
                                                            setData({
                                                                ...data,
                                                                image: url || "",
                                                            });
                                                        }}
                                                    />
                                                </label>
                                            </div>
                                            <button className="block px-4 py-2 hover:bg-gray-100 rounded-b-sm dark:hover:bg-gray-600 dark:hover:text-white text-left w-full">
                                                Remove Photo
                                            </button>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>

                    <div className="mt-6 flex items-center justify-end">
                        <button
                            type="submit"
                            className="rounded-md bg-violet-500 px-3 py-2 text-sm font-semibold text-white shadow-sm hover:bg-violet-600 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600"
                        >
                            Update
                        </button>
                    </div>
                </form>
            )}
        </>
    );
}

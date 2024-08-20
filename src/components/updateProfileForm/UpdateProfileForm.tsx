"use client"

import { MdOutlineModeEdit } from "react-icons/md";
import { fetchUser, logout, updateUser } from "../../../actions/auth";
import { useState } from "react";
import { z } from "zod";
import { SubmitHandler, useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { UpdateProfileFormSchema } from "@/constants/formSchema";
import { useDispatch, useSelector } from "react-redux";
import { AppDispatch, RootState } from "@/store/store";
import { useEdgeStore } from "@/lib/edgestore";
import { toggleForm, toggleUplaod } from "@/store/slices/navSlice";
import { SingleImageDropzone } from "../singleImageDropzone/SingleImageDropzone";

type InputType = z.infer<typeof UpdateProfileFormSchema>;

export default function UpdateProfileForm() {

    const { edgestore } = useEdgeStore();
    const editOpen = useSelector((state: RootState) => state.nav.editOpen);
    const { register, handleSubmit, formState: { errors } } = useForm<InputType>({
        resolver: zodResolver(UpdateProfileFormSchema)
    });

    // const [file, setFile] = useState<File>();
    // const [url, setUrl] = useState("");
    const [data, setData] = useState({
        name: '',
        email: ''
    })

    // const handleMenuClick = () => {
    //     dispatch(toggleUplaod());
    // };


    const saveUser: SubmitHandler<InputType> = async (data) => {
        const user = data
        console.log(user)
        try {
            const result = await updateUser(user);
            console.log("result", result)
            alert("User Updated Successfully");
            logout();
        } catch (error) {
            alert("Something Went Wrong!");
        }
    };



    return (
        <form className={errors.name?.message ? "space-y-2" : "space-y-6"} onSubmit={handleSubmit(saveUser)}>
            <div>
                <label htmlFor="name" className="block text-sm font-medium leading-6 text-gray-900">
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
                <button
                    type="submit"
                    className="flex w-full justify-center rounded-md bg-purple-600 px-3 py-1.5 text-sm font-semibold leading-6 text-white shadow-sm hover:bg-purple-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600"
                >
                    Update
                </button>
            </div>
        </form>
    );
}

{/* {data.password && (
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
                                    >
                                        Change Password
                                    </button>
                                </div>
                            </div>
                        )} */}


{/* <div className="mt-10 grid grid-cols-1 gap-x-6 gap-y-8 sm:grid-cols-6">
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
                                    value={file}
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
                                                type="file"
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
                                    <button type="button" className="block px-4 py-2 hover:bg-gray-100 rounded-b-sm dark:hover:bg-gray-600 dark:hover:text-white text-left w-full">
                                        Remove Photo
                                    </button>
                                </div>
                            </div>
                        </div>
                    </div> */}
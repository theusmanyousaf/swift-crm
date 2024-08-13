// "use client"
// import { useEdgeStore } from "@/lib/edgestore"
// import { useState } from "react";
// import { FaUserCircle } from "react-icons/fa";
// import { MdOutlineModeEdit } from "react-icons/md";
// import { toggleUplaod } from '@/store/slices/navSlice';
// import Image from "next/image";
// import { useDispatch, useSelector } from "react-redux";
// import { AppDispatch, RootState } from "@/store/store";

// export default function ImageUpload() {
    
//     const dispatch: AppDispatch = useDispatch();
//     const [file, setFile] = useState<File>();
//     const { edgestore } = useEdgeStore();

//     const editOpen = useSelector((state: RootState) => state.nav.editOpen);
//     const handleMenuClick = () => {
//         dispatch(toggleUplaod());
//     };

//     return (
//         <form className="col-span-full" >
//             <label htmlFor="photo" className="block text-sm font-medium leading-6 text-gray-900">
//                 Profile Picture
//             </label>
//             <div className="mt-2 pr-5">
//                 {user?.image ? <Image src={user?.image} alt='User' width={300} height={300} className='h-32 w-32 md:w-40 md:h-40 rounded-full shadow-sm -z-10' /> : <FaUserCircle aria-hidden="true" className="h-32 w-32 md:w-40 md:h-40 text-gray-300 -z-10" />}
//                 <button
//                     type="button"
//                     className="absolute rounded-md flex items-center bg-white px-2.5 py-1.5 text-sm text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 hover:bg-gray-50 -mt-5"
//                     onClick={handleMenuClick}
//                 >
//                     <MdOutlineModeEdit size={16} /> Edit
//                 </button>
//                 <div className={`bg-white divide-y ring-1 ring-gray-300 divide-gray-100 rounded-sm shadow-sm dark:bg-gray-700 mt-3 text-xs ease-in w-36 ${editOpen ? "block" : "hidden"}`}>

//                     <label htmlFor="file" className="block px-4 py-2 rounded-t-sm hover:bg-gray-100 dark:hover:bg-gray-600 dark:hover:text-white">Upload a Photo...<input id='file' type='file' name='file' className='hidden' onChange={(e) => { setFile(e.target.files?.[0]); }} /></label>

//                     <button className="block px-4 py-2 hover:bg-gray-100 rounded-b-sm dark:hover:bg-gray-600 dark:hover:text-white text-left w-full" >Remove Photo</button>

//                 </div>
//             </div>
//         </form>
//     )
// }

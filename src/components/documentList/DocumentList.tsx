'use client'
import { useEffect, useState } from 'react';
import Image from 'next/image';
import { BsChevronRight, BsChevronLeft, BsSearch, BsUpload } from 'react-icons/bs';
import { CiSquarePlus } from "react-icons/ci";
import Link from 'next/link';
import { fetchDocuments } from '@/constants/actions/docActions';
import { useRouter } from 'next/navigation';

type DocumentData = {
    customer: {
        name: string;
        imageUrl: string;
    };
} & {
    DocumentID: string;
    documentName: string;
    type: string;
    version: number;
    status: string;
    documentUrl: string;
    createdAt: Date;
    updatedAt: Date;
    CustomerID: string;
}


export default function DocumentList() {
    const router = useRouter();

    const handleEditClick = (DocumentId: string) => {
        router.push(`/documents/edit/${DocumentId}`);
    };

    const [documents, setDocuments] = useState<DocumentData[]>()

    useEffect(() => {
        const getUser = async () => {
            try {
                const userData = await fetchDocuments();
                if (userData) {
                    setDocuments(userData); // Set initial data state
                }
            } catch (error) {
                console.error("Failed to fetch user", error);
            }
        };
        getUser();
    }, []);

    const [currentPage, setCurrentPage] = useState(1);
    const [selectedNumber, setSelectedNumber] = useState<number>(10);

    const itemsPerPage = selectedNumber;

    const handleNumberSelect = (value: number) => {
        setSelectedNumber(value);
    };

    // Calculate the number of pages
    const totalPages = Math.ceil(documents?.length as number / itemsPerPage);

    // Get the customers for the current page
    const currentCustomers = documents?.slice(
        (currentPage - 1) * itemsPerPage,
        currentPage * itemsPerPage
    );

    // Handle next button click
    const handleNext = () => {
        setCurrentPage((prevPage) => Math.min(prevPage + 1, totalPages));
    };

    // Handle previous button click
    const handlePrevious = () => {
        setCurrentPage((prevPage) => Math.max(prevPage - 1, 1));
    };

    return (
        <>
            <div className='my-[33px] bg-white rounded-lg px-4 py-6 mx-[10.28%] md:mx-0 border'>
                <div className='flex lg:flex-row flex-col md:justify-between md:items-center gap-4'>
                    <div className='font-semibold font-albert-sans xl:text-base text-sm ml-1'>

                        <button className='xl:py-2 py-[6.6px] xl:px-4 px-[13.28px] border-b-4 text-purple-500 border-purple-500'>ALL</button>
                        <button className='xl:py-2 py-[6.6px] xl:px-4 px-[13.28px] border-b-4 border-black'>Active</button>
                        <button className='xl:py-2 py-[6.6px] xl:px-4 px-[13.28px] border-b-4 border-black'>Archive</button>

                    </div>

                    <div className="flex md:flex-row flex-col gap-4 xl:text-sm text-xs font-albert-sans">
                        <div className='flex'><input id="search-here" type="text" placeholder="Type here" className="border border-grey-200 md:max-w-32 w-full lg:max-w-[201px] px-2 py-1.5 rounded-l-md" /> <button className="bg-purple-500 text-sm lg:text-base text-white flex items-center justify-evenly w-auto xl:w-[99px] px-3 py-1.5 rounded-r-md"><BsSearch />Search</button></div>
                        <button className='border-2 border-purple-500 rounded-md xl:py-2 py-[6.6px] xl:px-4 px-[13.28px] font-semibold text-purple-500'>Download</button>
                        <button className='border-2 border-purple-500 rounded-md xl:py-2 py-[6.6px] xl:px-4 px-[13.28px] font-semibold text-purple-500'>Delete</button>
                    </div>
                </div>
                <div className="overflow-x-auto">
                    <div className='flex xl:gap-x-6 mt-3 bg-purple-100 gap-x-5 items-center justify-around px-2 py-[13px] font-semibold min-w-[842px] xl:text-sm text-xs rounded-md'>
                        <input type="checkbox" />
                        <div className='py-[5.5px] xl:min-w-[247px] min-w-[205px]'>Document Name</div>
                        <div className='py-[5.5px] xl:min-w-[56px] min-w-[46.5px]'>Type</div>
                        <div className='py-[5.5px] xl:min-w-[194px] min-w-[161px]'>Author</div>
                        <div className='py-[5.5px] xl:min-w-[115.5px] min-w-[95px]'>Version</div>
                        <div className='py-[5.5px] pr-10 xl:min-w-[81px] min-w-[68px]'>Status</div>
                        <div className='py-[5.5px] xl:min-w-[107px] min-w-[88.8px]'>Actions</div>
                    </div>
                    {documents?.map((data, index) => (
                        <div key={index} className='flex xl:gap-x-6 gap-x-5 mt-3 p-2 items-center bg-white text-gray-500 min-w-[842px] xl:text-sm text-xs font-medium xl:h-[47px] h-[39px]'>
                            <input type="checkbox" />
                            <div className='flex flex-col xl:min-w-[247px] min-w-[205px]'>
                                <div className='text-xs xl:text-sm text-black'>{data.documentName}</div>
                                <div className='text-[10px] xl:text-xm '>Uploaded {data.createdAt.toLocaleDateString()}</div>
                            </div>
                            <div className='w-full xl:min-w-[56px] min-w-[46.5px]'>{data.type.toUpperCase()}</div>
                            <div className='flex items-center w-full xl:min-w-[194px] min-w-[161px]'>
                                <Image src={data.customer.imageUrl} alt={data.customer.name} width={120} height={120} className="w-[31px] h-[31px] rounded-full mr-2" />
                                {data.customer.name}
                            </div>
                            <div className='w-full xl:min-w-[115.5px] min-w-[95px]'>{data.version}</div>
                            <div className='w-full flex-1 pr-9 xl:min-w-[81px] min-w-[68px] xl:text-xs lg:text-[10px] font-medium font-albert-sans'>
                                <span className={`px-2 py-1 rounded-full text-xs font-bold ${data.status.charAt(0).toUpperCase() + data.status.slice(1) === 'Active' ? 'bg-lime-100 text-lime-600' : 'bg-red-100 text-red-600'}`}>
                                    {data.status.charAt(0).toUpperCase() + data.status.slice(1)}
                                </span>
                            </div>
                            <div className='w-full flex gap-4 font-albert-sans'>
                                <Link href={data.documentUrl} target='_blank' ><button className='border-2 border-purple-500 rounded-md xl:py-1 xl:px-2 py-[3.32px] px-[6.64px] '>View</button></Link>
                                <button onClick={() => handleEditClick(data.DocumentID)} className='border-2 border-purple-500 rounded-md xl:py-1 xl:px-2 py-[3.32px] px-[6.64px] '>Edit</button>
                            </div>
                        </div>
                    ))}


                </div>
                <div className='flex md:flex-row flex-col justify-between items-center gap-4 mt-3'>
                    <div className='font-semibold text-[15px] ml-1'>
                        Showing <span><select
                            className="py-2 px-1 rounded bg-purple-500 text-white focus:outline-none"
                            value={selectedNumber}
                            onChange={(e) => handleNumberSelect(parseInt(e.target.value, 10))}
                        >
                            {Array.from({ length: 6 }, (_, i) => i + 10).map((number) => (
                                <option key={number} value={number}>
                                    {number}
                                </option>
                            ))}
                        </select></span> of {documents?.length as number} entries
                    </div>

                    <div className="flex">
                        <button
                            onClick={handlePrevious}
                            disabled={currentPage === 1}
                            className="px-2 py-1.5 rounded-l border-2 border-gray-300 disabled:opacity-50 text-purple-600"
                        >
                            <BsChevronLeft />
                        </button>
                        {Array.from({ length: totalPages }, (_, index) => (
                            <button
                                key={index + 1}
                                onClick={() => setCurrentPage(index + 1)}
                                className={`px-1.5 text-xs ${currentPage === index + 1 ? 'bg-purple-600 text-white' : 'border-2 text-purple-600'}`}
                            >
                                {index + 1}
                            </button>
                        ))}
                        <button
                            onClick={handleNext}
                            disabled={currentPage === totalPages}
                            className="px-2 py-1.5 rounded-r border-2 border-gray-300 disabled:opacity-50 text-purple-600"
                        >
                            <BsChevronRight />
                        </button>
                    </div>
                </div>
            </div>
            <div className="flex md:flex-row flex-col xl:gap-4 gap-[13px] mx-[10.28%] md:mx-0 font-albert-sans justify-end mt-5 md:mt-[57px] xl:mt-[71px]  mb-6 md:mb-[41px] xl:mb-[29px]">
                <Link href="/documents/create" className='flex items-center justify-center xl:gap-2 gap-[3.6px] bg-purple-600 rounded-md xl:text-base text-[13.28px] xl:px-3 px-[10px] py-[9px] font-semibold text-white'><CiSquarePlus /> Create Document</Link>
                <button className='flex items-center justify-center xl:gap-2 gap-[3.6px] bg-purple-600 rounded-md xl:text-base text-[13.28px] xl:px-3 px-[10px] py-[9px] font-semibold text-white'><BsUpload /> Upload</button>
            </div>
        </>
    )
}

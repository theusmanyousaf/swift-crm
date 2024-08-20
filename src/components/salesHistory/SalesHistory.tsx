'use client'
import { useState } from 'react';
import Image from 'next/image';
import { BsChevronRight, BsChevronLeft } from 'react-icons/bs';
import { customers } from '@/constants/customersData';

const SalesHistory = () => {
    const [currentPage, setCurrentPage] = useState(1);
    const itemsPerPage = 4;


    // Calculate the number of pages
    const totalPages = Math.ceil(customers.length / itemsPerPage);

    // Get the customers for the current page
    const currentCustomers = customers.slice(
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
        <div className="flex flex-col px-4 pt-6 pb-4 border bg-white rounded-lg gap-3 xl:w-[415px]">
            <div className='flex items-center justify-between gap-3'>
                <h2 className="font-semibold">Sales History</h2>
                <div className="md:flex hidden">
                    <button
                        onClick={handlePrevious}
                        disabled={currentPage === 1}
                        className="px-2 py-[5px] rounded-l border-2 border-gray-300 disabled:opacity-50 text-purple-600"
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
                        className="px-2 py-[5px] rounded-r border-2 border-gray-300 disabled:opacity-50 text-purple-600"
                    >
                        <BsChevronRight />
                    </button>
                </div>
            </div>
            <hr />
            <h1 className='font-semibold text-gray-500 text-xs'>RECENT</h1>
            {currentCustomers.map((customer) => (
                <div key={customer.id} className='flex justify-between items-center'>
                    <div className='flex flex-1 items-center'>
                        <Image src={customer.imageUrl} alt={customer.name} className="w-[31px] h-[31px] rounded-full mr-2" />
                        <div className='flex flex-col font-medium'>
                            <h1 className='text-sm'>{customer.name}</h1>
                            <h2 className='text-xs text-gray-500'>{customer.country}</h2>
                        </div>
                    </div>
                    <div className='flex text-gray-500'>{customer.amount}</div>
                </div>
            ))}
            <div className="flex md:hidden">
                <button
                    onClick={handlePrevious}
                    disabled={currentPage === 1}
                    className="px-2 py-[5px] rounded-l border-2 border-gray-300 disabled:opacity-50 text-purple-600"
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
                    className="px-2 py-[5px] rounded-r border-2 border-gray-300 disabled:opacity-50 text-purple-600"
                >
                    <BsChevronRight />
                </button>
            </div>
        </div>
    );
};

export default SalesHistory;


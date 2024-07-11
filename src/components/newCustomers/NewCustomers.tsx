'use client'
import { useState } from 'react';
import Image from 'next/image';
import { BsChevronRight, BsChevronLeft } from 'react-icons/bs';
import { customers } from '@/constants/customersData';

const NewCustomers = () => {
    const [currentPage, setCurrentPage] = useState(1);
    const itemsPerPage = 6;


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
        <div className="px-4 pt-6 pb-5 border bg-white rounded-lg w-full xl:min-w-[741px]">
            <div className='flex justify-between items-center'>
                <h2 className="font-semibold">New Customers</h2>

                <div className="flex">
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

            <hr className='border-gray-300 my-3' />
            <div className='flex gap-6 items-center p-2 min-w-full bg-purple-200 rounded-lg text-sm font-semibold'>
                <div className='flex-1 py-[5.5px]'>Date</div>
                <div className='flex-1 py-[5.5px] xl:min-w-60'>Customer</div>
                <div className='flex-auto py-[5.5px]'>Status</div>
                <div className='flex-1 py-[5.5px]'>Total</div>
            </div>
            {currentCustomers.map((customer) => (
                <div key={customer.id} className='flex gap-x-6 mt-3 items-center p-2 min-w-full rounded-lg text-gray-500'>
                    <div className='flex-1'>{customer.date}</div>
                    <div className='flex-1 flex items-center xl:min-w-60'>
                        <Image src={customer.imageUrl} alt={customer.name} className="w-[31px] h-[31px] rounded-full mr-2" />
                        {customer.name}
                    </div>
                    <div className='flex-auto'>
                        <span className={`px-2 py-1 rounded-full text-xs font-bold ${customer.status === 'Success' ? 'bg-lime-100 text-lime-600' : 'bg-red-100 text-red-600'}`}>
                            {customer.status}
                        </span>
                    </div>
                    <div className='flex-1'>{customer.amount}</div>
                </div>
            ))}

        </div>
    );
};

export default NewCustomers;

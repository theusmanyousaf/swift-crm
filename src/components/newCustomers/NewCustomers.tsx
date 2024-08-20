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
        <div className="xl:px-4 px-3 xl:pt-6 xl:pb-5 py-[19.6px] border bg-white rounded-lg overflow-x-auto ml-[10.28%] md:ml-0">
            <div className='flex justify-between items-center min-w-[580px]'>
                <h2 className="font-semibold">New Customers</h2>

                <div className="sm:flex hidden">
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
            {/* Add widths according to figma to make it work in small screen just as I added widths to customers list on Customers page*/}
            <hr className='border-gray-300 xl:my-3 my-[9.5px] min-w-[580px]' />
            <div className='flex xl:gap-6 gap-[19.6px] items-center xl:p-2 p-1.5 min-w-[580px] bg-purple-200 rounded-lg xl:text-sm text-xs font-medium'>
                <div className='py-[5.5px] xl:min-w-[126.5px] min-w-[103.5px]'>Date</div>
                <div className='py-[5.5px] xl:min-w-[261px] min-w-[213.5px]'>Customer</div>
                <div className='py-[5.5px] xl:min-w-[107px] min-w-[87.5px]'>Status</div>
                <div className='py-[5.5px] xl:min-w-[126.5px] min-w-[103.5px]'>Total</div>
            </div>
            {currentCustomers.map((customer) => (
                <div key={customer.id} className='flex xl:gap-6 gap-[19.6px] xl:mt-3 mt-[9.5px] items-center xl:p-2 p-1.5 min-w-full rounded-lg text-gray-500 xl:text-sm text-xs font-medium'>
                    <div className='xl:min-w-[126.5px] min-w-[103.5px]'>{customer.date}</div>
                    <div className='flex items-center xl:min-w-[261px] min-w-[213.5px]'>
                        <Image src={customer.imageUrl} alt={customer.name} className="xl:w-[31px] w-[25.7px] xl:h-[31px] h-[25.7px] rounded-full mr-2" />
                        {customer.name}
                    </div>
                    <div className='xl:min-w-[107px] min-w-[87.5px]'>
                        <span className={`px-2 py-1 rounded-full xl:text-xs text-[10px] font-bold ${customer.status === 'Success' ? 'bg-lime-100 text-lime-600' : 'bg-red-100 text-red-600'}`}>
                            {customer.status}
                        </span>
                    </div>
                    <div className='xl:min-w-[126.5px] min-w-[103.5px]'>{customer.amount}</div>
                </div>
            ))}

            <div className="flex sm:hidden">
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

export default NewCustomers;

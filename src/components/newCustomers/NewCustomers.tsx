'use client'
import { useState } from 'react';
import Image, { StaticImageData } from 'next/image';
import { BsChevronRight, BsChevronLeft } from 'react-icons/bs';
import Avatar1 from '/public/assets/avatar1.png'
import Avatar2 from '/public/assets/avatar2.png'
import Avatar3 from '/public/assets/avatar3.png'
import Avatar4 from '/public/assets/avatar4.png'
import Avatar5 from '/public/assets/avatar5.png'
import Avatar6 from '/public/assets/avatar6.png'

type CustomerType = {
    id: number,
    date: string
    name: string
    status: string
    total: string
    imageUrl: StaticImageData
}

const NewCustomers = () => {
    const [currentPage, setCurrentPage] = useState(1);
    const itemsPerPage = 6;

    const customers: CustomerType[] = [
        {
            id: 1,
            date: "31 Jul 2023",
            name: "Jacob Swanson",
            status: "Success",
            total: "$999.00",
            imageUrl: Avatar1,
        },
        {
            id: 2,
            date: "31 Jul 2023",
            name: "Amelia Johnson",
            status: "Success",
            total: "$1999.00",
            imageUrl: Avatar2,
        },
        {
            id: 3,
            date: "31 Jul 2023",
            name: "Jacob Swanson",
            status: "Pending",
            total: "$2000.00",
            imageUrl: Avatar3,
        },
        {
            id: 4,
            date: "31 Jul 2023",
            name: "Amelia Johnson",
            status: "Success",
            total: "$399.00",
            imageUrl: Avatar4,
        },
        {
            id: 5,
            date: "31 Jul 2023",
            name: "Jacob Swanson",
            status: "Pending",
            total: "$799.00",
            imageUrl: Avatar5,
        },
        {
            id: 6,
            date: "31 Jul 2023",
            name: "Amelia Johnson",
            status: "Success",
            total: "$500.00",
            imageUrl: Avatar6,
        },
        {
            id: 7,
            date: "31 Jul 2023",
            name: "Jacob Swanson",
            status: "Success",
            total: "$976.00",
            imageUrl: Avatar3,
        },
        {
            id: 8,
            date: "31 Jul 2023",
            name: "Amelia Johnson",
            status: "Success",
            total: "$159.00",
            imageUrl: Avatar1
        },
        {
            id: 9,
            date: "31 Jul 2023",
            name: "Jacob Swanson",
            status: "Success",
            total: "$929.00",
            imageUrl: Avatar4,
        },
        {
            id: 10,
            date: "31 Jul 2023",
            name: "Amelia Johnson",
            status: "Success",
            total: "$749.00",
            imageUrl: Avatar2
        },
        {
            id: 11,
            date: "31 Jul 2023",
            name: "Jacob Swanson",
            status: "Success",
            total: "$632.00",
            imageUrl: Avatar6
        },
        {
            id: 12,
            date: "31 Jul 2023",
            name: "Amelia Johnson",
            status: "Success",
            total: "$489.00",
            imageUrl: Avatar5
        },
        {
            id: 13,
            date: "31 Jul 2023",
            name: "Jacob Swanson",
            status: "Success",
            total: "$762.00",
            imageUrl: Avatar1
        },
        {
            id: 14,
            date: "31 Jul 2023",
            name: "Amelia Johnson",
            status: "Success",
            total: "$154.00",
            imageUrl: Avatar3
        },
        // Add more customers as needed...
    ];


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
        <div className="px-4 pt-6 pb-5 bg-white rounded-lg mt-5 mb-[67px]">
            <div className='flex justify-between items-center '>
                <h2 className="text-xl font-bold">New Customers</h2>

                <div className="flex">
                    <button
                        onClick={handlePrevious}
                        disabled={currentPage === 1}
                        className="p-2 rounded-l border-2 border-gray-300 disabled:opacity-50 text-purple-600"
                    >
                        <BsChevronLeft />
                    </button>
                    {Array.from({ length: totalPages }, (_, index) => (
                        <button
                            key={index + 1}
                            onClick={() => setCurrentPage(index + 1)}
                            className={`px-2 py-[5.5px] text-xs ${currentPage === index + 1 ? 'bg-purple-600 text-white' : 'border-2 text-purple-600'}`}
                        >
                            {index + 1}
                        </button>
                    ))}
                    <button
                        onClick={handleNext}
                        disabled={currentPage === totalPages}
                        className="p-2 rounded-r border-2 border-gray-300 disabled:opacity-50 text-purple-600"
                    >
                        <BsChevronRight />
                    </button>
                </div>
            </div>

            <hr className='border border-gray-400 m-3' />
            <div className='flex gap-6 items-center p-2 min-w-full bg-purple-200 rounded-lg'>
                <div className='flex-1'>Date</div>
                <div className='flex-1'>Customer</div>
                <div className='flex-auto'>Status</div>
                <div className='flex-1'>Total</div>
            </div>
            {currentCustomers.map((customer) => (
                <div key={customer.id} className='flex gap-x-6 items-center p-2 min-w-full rounded-lg'>
                    <div className='flex-1'>{customer.date}</div>
                    <div className='flex-1 flex items-center min-w-60'>
                        <Image src={customer.imageUrl} alt={customer.name} className="w-10 h-10 rounded-full mr-4" />
                        {customer.name}
                    </div>
                    <div className='flex-auto'>
                        <span className={`px-2 py-1 rounded-full text-xs font-bold ${customer.status === 'Success' ? 'bg-lime-100 text-lime-600' : 'bg-red-100 text-red-600'}`}>
                            {customer.status}
                        </span>
                    </div>
                    <div className='flex-1'>{customer.total}</div>
                </div>
            ))}

        </div>
    );
};

export default NewCustomers;

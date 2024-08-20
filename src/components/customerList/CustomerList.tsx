'use client'
import { useState } from 'react';
import Image, { StaticImageData } from 'next/image';
import { BsChevronRight, BsChevronLeft, BsChevronDown } from 'react-icons/bs';
import Avatar1 from '/public/assets/avatar1.png'
import Avatar2 from '/public/assets/avatar2.png'
import Avatar3 from '/public/assets/avatar3.png'
import Avatar4 from '/public/assets/avatar4.png'
import Avatar5 from '/public/assets/avatar5.png'
import Avatar6 from '/public/assets/avatar6.png'

type CustomerType = {
    phone: string
    email: string
    name: string
    status: string
    address: string
    imageUrl: StaticImageData
}

const CustomerList = () => {
    const [currentPage, setCurrentPage] = useState(1);


    const [selectedNumber, setSelectedNumber] = useState<number>(10);

    const itemsPerPage = selectedNumber;

    const handleNumberSelect = (value: number) => {
        setSelectedNumber(value);
    };

    const customersList: CustomerType[] = [
        {
            phone: '555-123-4567',
            email: "jacobswanson@email.com",
            name: "Jacob Swanson",
            status: "Online",
            address: "Phoenix, USA",
            imageUrl: Avatar1,
        },
        {
            phone: '555-987-6543',
            email: "ameliajohnson@email.com",
            name: "Amelia Johnson",
            status: "Online",
            address: "Philadelphia, USA",
            imageUrl: Avatar2,
        },
        {
            phone: '555-555-7890',
            email: "ericslater@email.com",
            name: "Jacob Swanson",
            status: "Offline",
            address: "Dallas, USA",
            imageUrl: Avatar3,
        },
        {
            phone: '555-321-6540',
            email: "aaronchadwick@email.com",
            name: "Amelia Johnson",
            status: "Online",
            address: "San Diego, USA",
            imageUrl: Avatar4,
        },
        {
            phone: '555-888-9999',
            email: "jessicasloan@email.com",
            name: "Jacob Swanson",
            status: "Offline",
            address: "Detroit, USA",
            imageUrl: Avatar5,
        },
        {
            phone: '555-444-2222',
            email: "marygrover@email.com",
            name: "Amelia Johnson",
            status: "Online",
            address: "Portland, USA",
            imageUrl: Avatar6,
        },
        {
            phone: '555-666-7777',
            email: "mattrobbins@email.com",
            name: "Jacob Swanson",
            status: "Online",
            address: "Charlotte, USA",
            imageUrl: Avatar3,
        },
        {
            phone: '555-777-8888',
            email: "dehliadrake@email.com",
            name: "Amelia Johnson",
            status: "Online",
            address: "Las Vegas, USA",
            imageUrl: Avatar1
        },
        {
            phone: '555-234-5678',
            email: "conradwebber@email.com",
            name: "Jacob Swanson",
            status: "Online",
            address: "Nashville, USA",
            imageUrl: Avatar4,
        },
        {
            phone: '555-876-5432',
            email: "zekeromez@email.com",
            name: "Amelia Johnson",
            status: "Online",
            address: "Indianapolis, USA",
            imageUrl: Avatar2
        },
        {
            phone: '11',
            email: "31 Jul 2023",
            name: "Jacob Swanson",
            status: "Online",
            address: "$632.00",
            imageUrl: Avatar6
        },
        {
            phone: '12',
            email: "31 Jul 2023",
            name: "Amelia Johnson",
            status: "Online",
            address: "$489.00",
            imageUrl: Avatar5
        },
        {
            phone: '13',
            email: "31 Jul 2023",
            name: "Jacob Swanson",
            status: "Online",
            address: "$762.00",
            imageUrl: Avatar1
        },
        {
            phone: '14',
            email: "31 Jul 2023",
            name: "Amelia Johnson",
            status: "Online",
            address: "$154.00",
            imageUrl: Avatar3
        },
        // Add more customers as needed...
    ];


    // Calculate the number of pages
    const totalPages = Math.ceil(customersList.length / itemsPerPage);

    // Get the customers for the current page
    const currentCustomers = customersList.slice(
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
        <div className="py-8 mb-[100px] overflow-x-auto">
            <div className='flex xl:gap-x-6 gap-x-5 items-center justify-around p-2 font-semibold min-w-[842px] xl:h-[47px] h-[39px] xl:text-sm text-xs '>
                <input type="checkbox" />
                <div className='flex-1 py-[5.5px] xl:min-w-60 min-w-[198px]'>Customer Name</div>
                <div className='flex-1 py-[5.5px]  xl:min-w-[177px] min-w-[147px]'>Email</div>
                <div className='flex-1 py-[5.5px]  xl:min-w-[170px] min-w-[141px]'>Phone</div>
                <div className='flex-1 py-[5.5px]  xl:min-w-[170px] min-w-[141px]'>address</div>
                <div className='py-[5.5px] pr-10 xl:min-w-[107px] min-w-[89px]'>Status</div>
            </div>
            {currentCustomers.map((customer) => (
                <div key={customer.phone} className='flex gap-x-6 my-3 p-2 items-center bg-white rounded-md border text-gray-500 min-w-[842px] xl:text-sm text-xs font-medium xl:h-[47px] h-[39px]'>
                    <input type="checkbox" />
                    <div className='flex items-center w-full xl:min-w-60 min-w-[198px]'>
                        <Image src={customer.imageUrl} alt={customer.name} className="w-[31px] h-[31px] rounded-full mr-2" />
                        {customer.name}
                    </div>
                    <div className='w-full xl:min-w-[177px] min-w-[147px]'>{customer.email}</div>
                    <div className='w-full xl:min-w-[170px] min-w-[141px]'>{customer.phone}</div>
                    <div className='w-full xl:min-w-[170px] min-w-[141px]'>{customer.address}</div>
                    <div className='w-full flex-1 pr-9 xl:min-w-[107px] min-w-[89px] xl:text-xs lg:text-[10px] font-medium'>
                        <span className={`px-2 py-1 rounded-full text-xs font-bold ${customer.status === 'Online' ? 'bg-lime-100 text-lime-600' : 'bg-gray-100 text-gray-600'}`}>
                            {customer.status}
                        </span>
                    </div>
                </div>
            ))}

            <div className='flex md:flex-row flex-col justify-between items-center gap-4'>
                <div className='font-semibold text-[15px]'>
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
                    </select></span> of {customersList.length} entries
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
    );
};

export default CustomerList;
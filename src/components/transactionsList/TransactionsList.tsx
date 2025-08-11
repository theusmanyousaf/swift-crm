'use client'
import { fetchTransactionsAsync } from '@/store/slices/transactionsSlice';
import { RootState, useAppDispatch } from '@/store/store';
import Image from 'next/image'
import { useEffect, useState } from 'react';
import { BsChevronLeft, BsChevronRight } from 'react-icons/bs';
import { useSelector } from 'react-redux';

export default function TransactionsList() {
    const dispatch = useAppDispatch();
    const { transactions, status, error } = useSelector((state: RootState) => state.transactions);

    const [currentPage, setCurrentPage] = useState(1);
    const [selectedNumber, setSelectedNumber] = useState<number>(10);

    const itemsPerPage = selectedNumber;

    const handleNumberSelect = (value: number) => {
        setSelectedNumber(value);
    };

    // Calculate the number of pages
    const totalPages = Math.ceil(transactions?.length / itemsPerPage);

    // Get the customers for the current page
    const currentTransactions = transactions?.slice(
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

    useEffect(() => {
        dispatch(fetchTransactionsAsync());
    }, [dispatch]);

    if (status === 'loading') {
        return <div>Loading...</div>;
    }

    if (status === 'failed') {
        return <div>Error: {error}</div>;
    }
    
    return (
        <div className='flex flex-col gap-y-3 px-4 py-5 bg-white border rounded-lg lg:mt-11 mt-5 overflow-x-auto'>
            <div className='flex justify-between py-2 px-4 pr-6 text-sm font-semibold bg-purple-100 rounded-md gap-4 min-w-[1002.4px]'>
                <h1 className='py-[5.5px] min-w-32' >Date</h1>
                <h1 className='py-[5.5px] min-w-56'>Customer Name</h1>
                <h1 className='py-[5.5px] min-w-52'>Product Name</h1>
                <h1 className='py-[5.5px] min-w-28'>Order Quantity</h1>
                <h1 className='py-[5.5px] min-w-24'>Status</h1>
                <h1 className='py-[5.5px]'>Amount</h1>
            </div>
            {currentTransactions.map((transaction) => (
                <div key={transaction.TransactionID} className='flex justify-between items-center py-2 px-4 gap-4 bg-gray-100 rounded-md min-w-[1002.4px]'>
                    <div className='min-w-32'>{transaction.createdAt}</div>
                    <div className='flex items-center min-w-56'>
                        <Image src={transaction.customer.imageUrl} alt={transaction.customer.name} width={40} height={40} className="w-[31px] h-[31px] rounded-full mr-2" />
                        {transaction.customer.name}
                    </div>
                    <div className='flex items-center gap-4 min-w-52'>
                        <Image src={transaction.product.imageUrl} alt='product' width={40} height={40} className='w-12 h-12 rounded-md' />
                        <div className='flex flex-col'><p className='font-semibold text-purple-800'>{transaction.product.name}</p><p className='text-gray-500'>{transaction.product.category}</p></div>
                    </div>
                    <div className='min-w-28'>
                        <p className='font-semibold font-albert-sans h-[18px]'>{transaction.quantity} pcs</p>
                    </div>
                    <div className='min-w-24'>
                        <span className={`px-2 py-1 rounded-full font-bold ${transaction.paymentStatus === 'paid' ? 'bg-lime-100 text-lime-600' : 'bg-red-100 text-red-600'}`}>
                            {transaction.paymentStatus === "paid" ? "Success" : "Pending"}
                        </span>
                    </div>
                    <p className='font-semibold font-albert-sans'>${transaction.amount.toFixed(2)}</p>
                </div>
            ))}

            <div className='flex md:flex-row flex-col justify-between items-center gap-4 '>
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
                    </select></span> of {transactions?.length} entries
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
    )
}

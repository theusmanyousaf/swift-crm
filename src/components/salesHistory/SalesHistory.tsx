'use client'
import { useState, useEffect } from 'react';
import Image from 'next/image';
import { BsChevronRight, BsChevronLeft } from 'react-icons/bs';
import { useAppDispatch } from '@/store/store';
import { useSelector } from 'react-redux';
import { fetchTransactionsAsync } from '@/store/slices/transactionsSlice';
import { RootState } from '@/store/store';

const SalesHistory = () => {
    const dispatch = useAppDispatch();
    const { transactions, status, error } = useSelector((state: RootState) => state.transactions);
    const [currentPage, setCurrentPage] = useState(1);
    const itemsPerPage = 4;

    // Calculate the number of pages
    const totalPages = Math.ceil(transactions.length / itemsPerPage);

    // Get the transactions for the current page
    const currentTransactions = transactions.slice(
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

    const renderPaginationButtons = () => {
        if (totalPages <= 4) {
            return Array.from({ length: totalPages }, (_, index) => (
                <button
                    key={index + 1}
                    onClick={() => setCurrentPage(index + 1)}
                    className={`px-1.5 text-xs ${currentPage === index + 1 ? 'bg-purple-600 text-white' : 'border-2 text-purple-600'}`}
                >
                    {index + 1}
                </button>
            ));
        } else {
            return (
                <>
                    <button
                        onClick={() => setCurrentPage(1)}
                        className={`px-1.5 text-xs ${currentPage === 1 ? 'bg-purple-600 text-white' : 'border-2 text-purple-600'}`}
                    >
                        1
                    </button>
                    <button
                        onClick={() => setCurrentPage(2)}
                        className={`px-1.5 text-xs ${currentPage === 2 ? 'bg-purple-600 text-white' : 'border-2 text-purple-600'}`}
                    >
                        2
                    </button>
                    <span className="px-1.5 text-xs">...</span>
                    {currentPage < totalPages - 2 && <button
                        onClick={() => setCurrentPage(totalPages - 1)}
                        className={`px-1.5 text-xs ${currentPage === totalPages - 1 ? 'bg-purple-600 text-white' : 'border-2 text-purple-600'}`}
                    >
                        {totalPages - 1}
                    </button>}
                    <button
                        onClick={() => setCurrentPage(totalPages)}
                        className={`px-1.5 text-xs ${currentPage === totalPages ? 'bg-purple-600 text-white' : 'border-2 text-purple-600'}`}
                    >
                        {totalPages}
                    </button>
                </>
            );
        }
    };

    return (
        <div className="flex flex-col px-4 pt-6 pb-4 border bg-white rounded-lg gap-3">
            <div className='flex items-center justify-between gap-3'>
                <h2 className="font-semibold min-w-28">Sales History</h2>
                <div className="md:flex hidden">
                    <button
                        onClick={handlePrevious}
                        disabled={currentPage === 1}
                        className="px-2 py-[5px] rounded-l border-2 border-gray-300 disabled:opacity-50 text-purple-600"
                    >
                        <BsChevronLeft />
                    </button>
                    {renderPaginationButtons()}
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
            {currentTransactions.map((transaction) => (
                <div key={transaction.TransactionID} className='flex justify-between gap-2 items-center text-sm font-medium'>
                    <div className='flex items-center xl:min-w-[261px]'>
                        <Image src={transaction.customer.imageUrl} alt={transaction.customer.name} width={120} height={120} className="w-[31px] h-[31px] rounded-full mr-2" />
                        <div className='flex flex-col font-medium'>
                            <h1>{transaction.customer.name}</h1>
                            <h2 className='text-xs text-gray-500'>{transaction.customer.country}</h2>
                        </div>
                    </div>
                    <div className='text-right text-gray-500 xl:min-w-[114px]'>${transaction.amount.toFixed(2)}</div>
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
                {renderPaginationButtons()}
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


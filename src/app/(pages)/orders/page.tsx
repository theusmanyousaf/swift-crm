import Header from '@/components/header/Header'
import Image from 'next/image'
import { productsOrder } from '@/constants/bestSellingProducts'
import React from 'react'
import { CiSquarePlus } from 'react-icons/ci'
import Link from 'next/link'
import { fetchTransactions } from '@/constants/actions/transactionActions'

type Transaction = {
    customer: {
        name: string;
        imageUrl: string;
    };
    product: {
        name: string;
        imageUrl: string;
        category: string;
    };
} & {
    TransactionID: string;
    paymentStatus: string;
    quantity: number;
    amount: number;
    createdAt: Date;
    CustomerID: string;
    productId: string;
}

export default async function Orders() {
    const transactions: Transaction[] = (await fetchTransactions()) || [];
    return (
        <div className='lg:ml-10 w-full'>
            <Header title='Orders' />
            <div className='flex flex-col gap-y-3 px-4 bg-white border rounded-lg pt-5 pb-6 lg:mt-11'>
                <div className='flex justify-between p-2 pr-6 text-sm font-semibold bg-purple-100 rounded-md gap-6'>
                    <h1 className='py-[5.5px]'>Date</h1>
                    <h1 className='py-[5.5px] flex-1'>Customer Name</h1>
                    <h1 className='py-[5.5px] flex-1'>Product Name</h1>
                    <h1 className='py-[5.5px] flex-1'>Order Quantity</h1>
                    <h1 className='py-[5.5px] flex-1'>Status</h1>
                    <h1 className='py-[5.5px]'>Amount</h1>
                </div>
                {transactions.map((transaction, index) => (
                    <div key={index} className='flex items-center p-2 justify-between gap-6 bg-gray-100 rounded-md'>
                        <div>{transaction.createdAt.toLocaleDateString()}</div>
                        <div className='flex items-center'>
                            <Image src={transaction.customer.imageUrl} alt={transaction.customer.name} width={40} height={40} className="w-[31px] h-[31px] rounded-full mr-2" />
                            {transaction.customer.name}
                        </div>
                        <div className='flex items-center gap-4'>
                            <Image src={transaction.product.imageUrl} alt='product' width={40} height={40} className='w-12 h-12 rounded-md' />
                            <div className='flex flex-col'><p className='font-semibold text-purple-800'>{transaction.product.name}</p><p className='text-gray-500'>{transaction.product.category}</p></div>
                        </div>
                        <div>
                            <p className='font-semibold font-albert-sans h-[18px]'>{transaction.quantity} pcs</p>
                        </div>
                        <div className=''>
                            <span className={`px-2 py-1 rounded-full font-bold ${transaction.paymentStatus === 'paid' ? 'bg-lime-100 text-lime-600' : 'bg-red-100 text-red-600'}`}>
                                {transaction.paymentStatus}
                            </span>
                        </div>
                        <p className='font-semibold font-albert-sans pr-6'>${transaction.amount}</p>
                    </div>
                ))}
            </div>
            <div className="flex md:flex-row flex-col xl:gap-4 gap-[13px] mx-[10.28%] md:mx-0 font-albert-sans justify-end mt-5 md:mt-[57px] xl:mt-[71px]  mb-6 md:mb-[41px] xl:mb-[29px]">
                <Link href='/orders/create'><button className='flex items-center justify-center xl:gap-2 gap-[3.6px] bg-purple-600 rounded-md xl:text-base text-[13.28px] xl:px-3 px-[10px] py-[9px] font-semibold text-white'><CiSquarePlus size={20} /> Add Order Transaction</button></Link>
            </div>
        </div>
    )
}

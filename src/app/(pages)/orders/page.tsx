import Header from '@/components/header/Header'
import { CiSquarePlus } from 'react-icons/ci'
import Link from 'next/link'
import TransactionsList from '@/components/transactionsList/TransactionsList'

export default async function Orders() {
    return (
        <div className='lg:ml-10 overflow-auto'>
            <Header title='Orders' />
            <TransactionsList />
            <div className="flex md:flex-row flex-col xl:gap-4 gap-[13px] mx-[10.28%] md:mx-0 font-albert-sans justify-end mt-5 md:mt-[57px] xl:mt-[71px]  mb-6 md:mb-[41px] xl:mb-[29px]">
                <Link href='/orders/create'><button className='flex items-center justify-center xl:gap-2 gap-[3.6px] bg-purple-600 rounded-md xl:text-base text-[13.28px] xl:px-3 px-[10px] py-[9px] font-semibold text-white'><CiSquarePlus size={20} /> Add Order Transaction</button></Link>
            </div>
        </div>
    )
}

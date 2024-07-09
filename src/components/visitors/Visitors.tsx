import Graph from '/public/assets/GraphVisitors.png'
import Image from 'next/image'
import { BsAward } from "react-icons/bs";

export default function Visitors() {
    return (
        <div className='flex flex-col gap-3 bg-white border rounded-lg py-6 px-4'>
            <h1 className='font-semibold'>Overall Sales</h1>
            <hr />
            <Image src={Graph} alt='graph' />
            <hr />
            <div className='flex items-center gap-2'>
                <BsAward className='text-purple-500 w-5 h-5'/>
                <div>
                    <h1 className='font-semibold text-sm'>Awesome!</h1>
                    <h2 className='font-semibold text-xs text-gray-300'>You just hit a new record!</h2>
                </div>
            </div>
        </div>
    )
}

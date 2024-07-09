import Image from 'next/image'
import Graph from '/public/assets/GraphOverall.png'

export default function OverallSales() {
    return (
        <div className='flex flex-col gap-3 bg-white border rounded-lg pt-6 pb-12 px-4'>
            <h1 className='font-semibold'>Overall Sales</h1>
            <div className='flex justify-between'>
                <div className='flex gap-2 items-center'>
                    <h1 className='font-bold text-2xl'>$ 58,986.00</h1>
                    <button className="rounded-full text-xs font-bold text-lime-800 bg-lime-200 px-2 mr-3">+ 5.6%</button>
                </div>
                <div className='flex'>
                    <div className="flex items-center mr-4">
                        <div className="rounded-full w-2.5 h-2.5 bg-purple-500 mr-2"></div>
                        <span className='text-gray-500 text-xs font-semibold'>Current Week</span>
                    </div>
                    <div className="flex items-center">
                        <div className=" rounded-full w-2.5 h-2.5 bg-sky-500 mr-2"></div>
                        <span className='text-gray-500 text-xs font-semibold'>Last week</span>
                    </div>
                </div>
            </div>
            <hr />
            <Image src={Graph} alt='graph'/>
        </div>
    )
}

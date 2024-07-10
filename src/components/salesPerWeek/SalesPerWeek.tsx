import Image from 'next/image'
import Graph from '/public/assets/WeeklyGraph.png'

export default function SalesPerWeek() {
    return (
        <div className='flex flex-col gap-3 bg-white border rounded-lg py-6 px-4'>
            <h1 className='font-semibold'>Sales Per Week</h1>
            <hr />
            <Image src={Graph} alt='graph' />
            <hr />
            <div className='flex gap-3'>
                <h1 className='font-semibold texts w-[100px]'>Orders: </h1>

                <div className='flex gap-8'>
                    <div className="flex items-center">
                        <div className="rounded-full w-2.5 h-2.5 bg-purple-200 mr-2" />
                        <span className='text-gray-500 text-xs font-semibold'>0-500</span>
                    </div>
                    <div className="flex items-center">
                        <div className=" rounded-full w-2.5 h-2.5 bg-purple-300 mr-2" />
                        <span className='text-gray-500 text-xs font-semibold'>501-1000</span>
                    </div>
                    <div className="flex items-center">
                        <div className=" rounded-full w-2.5 h-2.5 bg-purple-500 mr-2" />
                        <span className='text-gray-500 text-xs font-semibold'>1001-5000</span>
                    </div>
                    <div className="flex items-center">
                        <div className=" rounded-full w-2.5 h-2.5 bg-purple-900 mr-2" />
                        <span className='text-gray-500 text-xs font-semibold'>5001-10000</span>
                    </div>
                </div>
            </div>
        </div>
    )
}

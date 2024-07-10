import Image from 'next/image'
import Graph from '/public/assets/PieChart.png'

export default function SourcesOfPurchase() {
    return (
        <div className='flex flex-col gap-3 bg-white border rounded-lg py-6 px-4'>
            <h1 className='font-semibold'>Sources Of Purchase</h1>
            <hr />
            <Image src={Graph} alt='graph' />
            <div className='flex flex-col gap-3'>
                <div className="flex justify-between">
                    <div className="flex items-center">
                        <div className="rounded-full w-2.5 h-2.5 bg-sky-400 mr-2" />
                        <span className='text-gray-300 text-xs font-semibold'>Social Media</span>
                    </div>
                    <h1 className="font-bold text-sm">49%</h1>
                </div>
                <div className="flex justify-between">
                    <div className="flex items-center">
                        <div className=" rounded-full w-2.5 h-2.5 bg-lime-700 mr-2" />
                        <span className='text-gray-300 text-xs font-semibold'>Direct Search</span>
                    </div>
                    <h1 className="font-bold text-sm">35%</h1>
                </div>
                <div className="flex justify-between">
                    <div className="flex items-center">
                        <div className=" rounded-full w-2.5 h-2.5 bg-red-600 mr-2" />
                        <span className='text-gray-300 text-xs font-semibold'>Others</span>
                    </div>
                    <h1 className="font-bold text-sm">16%</h1>
                </div>


            </div>
        </div>
    )
}

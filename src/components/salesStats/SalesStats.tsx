import Image from 'next/image'
import Graph from '/public/assets/SalesGraph.png'

export default function SalesStatistics() {
  return (
    <div className="bg-white py-6 pl-4 w-full rounded-lg border flex flex-col gap-3">
        <h1 className="font-semibold">Sales Statistics</h1>
        <hr className="border-gray-300 mr-4"/>
        <div className='flex justify-evenly mr-2'>
            <div className='flex flex-1'>
                <div className='w-[25px] h-[25px] flex items-center justify-center'><div className='bg-sky-400 rounded-full w-4 h-4' /></div>
                <div className='flex-col'><h2 className='text-gray-600 font-semibold'>Total Revenue</h2><h1 className='text-2xl font-bold'>$ 27,733.00 <span className='text-gray-300 font-semibold text-[15px]'>Orders</span></h1></div>
            </div>
            <hr className='w-0 h-full border border-gray-400 mr-2'/>
            <div className='flex'>
                <div className='w-[25px] h-[25px] flex items-center justify-center'><div className='bg-lime-600 rounded-full w-4 h-4' /></div>
                <div className='flex-col'><h2 className='text-gray-600 font-semibold'>Total Sales</h2><h1 className='text-2xl font-bold'>9,234 <span className='text-gray-300 font-semibold text-[15px]'>Products</span></h1></div>
            </div>
            <hr className='w-0 h-full border border-gray-400 mx-2'/>
            <div className='flex'>
                <div className='w-[25px] h-[25px] flex items-center justify-center'><div className='bg-purple-500 rounded-full w-4 h-4' /></div>
                <div className='flex-col'><h2 className='text-gray-600 font-semibold'>Total Views</h2><h1 className='text-2xl font-bold'>15,788 <span className='text-gray-300 font-semibold text-[15px]'>Views</span></h1></div>
            </div>
        </div>
        <Image src={Graph} alt='SalesGraph' className='mr-[23px]'/>

    </div>
  )
}

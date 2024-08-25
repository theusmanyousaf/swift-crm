import React from 'react'
import { BsPeople } from 'react-icons/bs'

export default function CustomerSummary() {
  return (
    <div className='grid grid-cols-2 lg:flex gap-5 xl:gap-6 mt-12 xl:h-32 lg:h-[106px] mx-[10.28%] lg:mx-0'>
        <div className='flex justify-start items-center bg-gradient-to-b from-[#9A55FF] to-[#D355FF] rounded-lg h-[108.5px] lg:h-auto pl-5 xl:pl-6 w-full gap-3'><div className='xl:w-[42px] xl:h-[42px] w-[35px] h-[35px] bg-slate-50 text-purple-500 rounded-full flex items-center justify-center'><BsPeople className='w-[16.5px] h-[16.5px]'/></div><div className='flex flex-col gap-2 text-white'><p className='font-semibold xl:text-[15px] text-xs'>Total Customers</p><h1 className='font-bold xl:text-2xl text-xl'>10,678</h1></div></div>
        <div className='flex justify-start items-center bg-white rounded-lg h-[108.5px] lg:h-auto pl-5 xl:pl-6 border w-full gap-3'><div className='xl:w-[42px] xl:h-[42px] w-[35px] h-[35px] bg-blue-400 text-white rounded-full flex items-center justify-center'><BsPeople className='w-[16.5px] h-[16.5px]'/></div><div className='flex flex-col gap-2'><p className='font-semibold xl:text-[15px] text-xs text-gray-500'>New Customers</p><h1 className='font-bold xl:text-2xl text-xl'>1,000</h1></div></div>
        <div className='flex justify-start items-center bg-white rounded-lg h-[108.5px] lg:h-auto pl-5 xl:pl-6 border w-full gap-3'><div className='xl:w-[42px] xl:h-[42px] w-[35px] h-[35px] bg-lime-700 text-white rounded-full flex items-center justify-center'><BsPeople className='w-[16.5px] h-[16.5px]'/></div><div className='flex flex-col gap-2'><p className='font-semibold xl:text-[15px] text-xs text-gray-500'>Total Members</p><h1 className='font-bold xl:text-2xl text-xl'>8,846</h1></div></div>
        <div className='flex justify-start items-center bg-white rounded-lg h-[108.5px] lg:h-auto pl-5 xl:pl-6 border w-full gap-3'><div className='xl:w-[42px] xl:h-[42px] w-[35px] h-[35px] bg-rose-600 text-white rounded-full flex items-center justify-center'><BsPeople className='w-[16.5px] h-[16.5px]'/></div><div className='flex flex-col gap-2'><p className='font-semibold xl:text-[15px] text-xs text-gray-500'>Non-Members</p><h1 className='font-bold xl:text-2xl text-xl'>832</h1></div></div>
    </div>
  )
}

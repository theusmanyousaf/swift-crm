import React from 'react'
import { BsPeople } from 'react-icons/bs'

export default function CustomerSummary() {
  return (
    <div className='grid grid-cols-2 md:flex gap-5 xl:gap-6 mt-12 w-full h-32'>
        <div className='flex justify-center items-center bg-gradient-to-b from-purple-700 to-purple-400 rounded-lg py-4 px-6 gap-3'><div className='w-[42px] h-[42px] bg-slate-50 text-purple-500 rounded-full flex items-center justify-center'><BsPeople className='w-[16.5px] h-[16.5px]'/></div><div className='flex flex-col gap-2 text-white'><p className='font-semibold text-[15px]'>Total Customers</p><h1 className='font-bold text-2xls'>10,678</h1></div></div>
        <div className='flex justify-center items-center bg-white rounded-lg py-4 px-6 border gap-3'><div className='w-[42px] h-[42px] bg-blue-400 text-white rounded-full flex items-center justify-center'><BsPeople className='w-[16.5px] h-[16.5px]'/></div><div className='flex flex-col gap-2'><p className='font-semibold text-[15px] text-gray-500'>New Customers</p><h1 className='font-bold text-2xls'>1,000</h1></div></div>
        <div className='flex justify-center items-center bg-white rounded-lg py-4 px-6 border gap-3'><div className='w-[42px] h-[42px] bg-lime-700 text-white rounded-full flex items-center justify-center'><BsPeople className='w-[16.5px] h-[16.5px]'/></div><div className='flex flex-col gap-2'><p className='font-semibold text-[15px] text-gray-500'>Total Members</p><h1 className='font-bold text-2xls'>8,846</h1></div></div>
        <div className='flex justify-center items-center bg-white rounded-lg py-4 px-6 border gap-3'><div className='w-[42px] h-[42px] bg-rose-600 text-white rounded-full flex items-center justify-center'><BsPeople className='w-[16.5px] h-[16.5px]'/></div><div className='flex flex-col gap-2'><p className='font-semibold text-[15px] text-gray-500'>Non-Members</p><h1 className='font-bold text-2xls'>832</h1></div></div>
    </div>
  )
}

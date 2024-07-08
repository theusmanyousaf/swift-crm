import BestSellingProducts from '@/components/bestSellingProducts/BestSellingProducts'
import Header from '@/components/header/Header'
import SalesStatistics from '@/components/salesStats/SalesStats'
import React from 'react'

export default function OrderOverview() {
  return (
    <div className='xl:ml-[30px]'>
      <Header title='Order Overview' />
      <div className='flex gap-[26px] mt-[62px] mb-[58px]'>
        <div className='flex flex-col gap-5 w-full'>
          <SalesStatistics />
          <BestSellingProducts />
        </div>
      </div>
    </div>
  )
}

import BestSellingProducts from '@/components/bestSellingProducts/BestSellingProducts'
import CountrySalesStats from '@/components/countrySalesStats/CountrySalesStats'
import Header from '@/components/header/Header'
import SalesStatistics from '@/components/salesStats/SalesStats'
import React from 'react'

export default function OrderOverview() {
  return (
    <div className='xl:ml-[29px] lg:ml-[27px] lg:mr-0 md:mx-[27px] overflow-auto'>
      <Header title='Order Overview' />
      <div className='flex lg:flex-row flex-col gap-[26px] mt-[62px] mb-[58px]'>
        <div className='flex flex-col gap-5 overflow-auto'>
          <SalesStatistics />
          <BestSellingProducts />
        </div>
        <CountrySalesStats />
      </div>
    </div>
  )
}

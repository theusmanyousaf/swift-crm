import Header from '@/components/header/Header'
import OverallSales from '@/components/overallSales/OverallSales'
import SalesHistory from '@/components/salesHistory/SalesHistory'
import SalesPerCountry from '@/components/salesPerCountry/SalesPerCountry'
import SalesPerWeek from '@/components/salesPerWeek/SalesPerWeek'
import SourcesOfPurchase from '@/components/sourcesOfPurchase/SourcesOfPurchase'
import Visitors from '@/components/visitors/Visitors'

export default function Analytics() {
  return (
    <div className='md:mx-[29px] mx-[10.28%] lg:mr-0'>
      <Header title='Analytics' />
      <div className='xl:mt-[62px] flex lg:flex-row flex-col gap-6'>
        <OverallSales />
        <Visitors />
      </div>
      <div className='flex lg:flex-row flex-col gap-5 my-6'>
        <SourcesOfPurchase />
        <SalesPerWeek />
      </div>
      <div className='flex lg:flex-row flex-col gap-6 mb-16'>
        <SalesPerCountry />
        <SalesHistory />
      </div>
    </div>
  )
}

import Header from '@/components/header/Header'
import OverallSales from '@/components/overallSales/OverallSales'
import SalesPerWeek from '@/components/salesPerWeek/SalesPerWeek'
import SourcesOfPurchase from '@/components/sourcesOfPurchase/SourcesOfPurchase'
import Visitors from '@/components/visitors/Visitors'

export default function Analytics() {
  return (
    <div className='xl:ml-[29px]'>
      <Header title='Analytics' />
      <div className='xl:mt-[62px] flex gap-6'>
        <OverallSales />
        <Visitors />
      </div>
      <div className='flex gap-5 my-6'>
        <SourcesOfPurchase />
        <SalesPerWeek />
      </div>
    </div>
  )
}

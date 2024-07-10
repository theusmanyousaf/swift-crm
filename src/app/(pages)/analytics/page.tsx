import Header from '@/components/header/Header'
import OverallSales from '@/components/overallSales/OverallSales'
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
      <SourcesOfPurchase />
    </div>
  )
}

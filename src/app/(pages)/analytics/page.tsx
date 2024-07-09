import Header from '@/components/header/Header'
import OverallSales from '@/components/overallSales/OverallSales'

export default function Analytics() {
  return (
    <div className='xl:ml-[29px]'>
      <Header title='Analytics' />
      <div className='xl:mt-[62px]'>
        <OverallSales />
      </div>
    </div>
  )
}

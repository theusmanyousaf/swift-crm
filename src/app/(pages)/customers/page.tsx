import CustomerSummary from '@/components/customerSummary/CustomerSummary'
import DeviceUsers from '@/components/deviceUsers/DeviceUsers'
import Header from '@/components/header/Header'

export default function Customers() {

  const desktopPercentage = 20;
  const mobilePercentage = 80;

  return (
    <div className='ml-[41px]'>
      <Header />
      <CustomerSummary />
      <DeviceUsers />
    </div>
  )
}

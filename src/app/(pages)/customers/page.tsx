import CustomerDemographics from '@/components/customerDemographics/CustomerDemographics';
import CustomerSummary from '@/components/customerSummary/CustomerSummary'
import DeviceUsers from '@/components/deviceUsers/DeviceUsers'
import Header from '@/components/header/Header'

export default function Customers() {

  return (
    <div className='ml-[41px]'>
      <Header />
      <CustomerSummary />
      <DeviceUsers />
      <CustomerDemographics />
    </div>
  )
}

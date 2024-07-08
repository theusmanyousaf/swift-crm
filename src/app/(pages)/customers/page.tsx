import CustomerDemographics from '@/components/customerDemographics/CustomerDemographics';
import CustomerList from '@/components/customerList/CustomerList';
import CustomerSummary from '@/components/customerSummary/CustomerSummary'
import DeviceUsers from '@/components/deviceUsers/DeviceUsers'
import Header from '@/components/header/Header'

export default function Customers() {

  return (
    <div className='ml-[41px]'>
      <Header title='Customers'/>
      <CustomerSummary />
      <DeviceUsers />
      <CustomerDemographics />
      <CustomerList />
    </div>
  )
}

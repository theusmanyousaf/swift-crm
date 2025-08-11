import CustomerDemographics from '@/components/customerDemographics/CustomerDemographics';
import CustomerList from '@/components/customerList/CustomerList';
import CustomerSummary from '@/components/customerSummary/CustomerSummary'
import DeviceUsers from '@/components/deviceUsers/DeviceUsers'
import Header from '@/components/header/Header'
import { fetchCustomers } from '@/constants/actions/customersActions';
import { Customer } from '@prisma/client';

export default async function Customers() {
  const customers = await fetchCustomers() as Customer[];
  return (
    <div className='lg:ml-[41px] overflow-auto'>
      <Header title='Customers'/>
      <CustomerSummary />
      <DeviceUsers />
      <CustomerDemographics />
      <CustomerList customers={customers} />
    </div>
  )
}

import { Customer } from '@prisma/client';
import { fetchCustomers } from '@/constants/actions/customersActions';
import DocForm from '@/components/docForm/DocForm';

export default async function Create(){
    const customers = await fetchCustomers()
    return(
        <div>
            <DocForm customers={customers as Customer[]} />
        </div>
    )
}

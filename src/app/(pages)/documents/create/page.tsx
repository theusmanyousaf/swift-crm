import { Customer } from '@prisma/client';
import { fetchCustomers } from '@/constants/actions/customersActions';
import DocumentCreateForm from '@/components/docForm/DocumentCreateForm';

export default async function DocumentCreate(){
    const customers = await fetchCustomers()
    return(
        <div>
            <DocumentCreateForm customers={customers as Customer[]} />
        </div>
    )
}

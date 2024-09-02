import OrderCreateForm from "@/components/orderForm/OrderCreateForm";
import { fetchCustomers } from "@/constants/actions/customersActions";
import { fetchProducts } from "@/constants/actions/productActions";
import { Customer, Product } from "@prisma/client";

export default async function CreateOrder() {
    const customers = await fetchCustomers()
    const products = await fetchProducts()
  return (
    <div>
        <OrderCreateForm customers={customers as Customer[]} products={products as Product[]} />
    </div>
  )
}

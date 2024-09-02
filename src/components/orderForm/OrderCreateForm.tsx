'use client'
import { Customer, Product } from "@prisma/client";
import Link from "next/link";
import { FaUserCircle } from "react-icons/fa";
import { FormEvent, useState } from "react";
import { createTransaction } from "@/constants/actions/transactionActions";

export default function OrderCreateForm({ customers, products }: { customers: Customer[], products: Product[] }) {
    const [data, setData] = useState({
        CustomerID: '',
        productId: '',
        quantity: 0,
        price: 0,
        amount: 0,
        paymentStatus: 'pending',
        createdAt: new Date().toISOString().split('T')[0], // Default to today's date in YYYY-MM-DD format
    });

    function handleInputChange(e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>) {
        const { name, value } = e.target;

        if (name === 'quantity') {
            const parsedQuantity = parseInt(value, 10);
            const newTotalAmount = data.price * parsedQuantity;
            setData((prevData) => ({
                ...prevData,
                quantity: parsedQuantity,
                amount: newTotalAmount,
            }));
        } else if (name === 'productId') {
            const selectedProduct = products.find(product => product.productId === value);
            const newPrice = selectedProduct?.price || 0;
            const newTotalAmount = newPrice * data.quantity;
            setData((prevData) => ({
                ...prevData,
                productId: value,
                price: newPrice,
                amount: newTotalAmount,
            }));
        } else {
            setData((prevData) => ({
                ...prevData,
                [name]: value,
            }));
        }
    }

    async function saveDocument(e: FormEvent) {
        e.preventDefault();
        const { price, ...reqData } = data;
        const transactionData = {
            ...reqData,
            createdAt: new Date(data.createdAt), // Convert to Date object
        };
        console.log("Transaction Saved:", transactionData);
        const res = await createTransaction(transactionData);
        console.log("res", res);
    }

    return (
        <form onSubmit={saveDocument} className='bg-white border ml-8 rounded-md'>
            <div className="rounded-md bg-gray-50 p-4 md:p-6">
                {/* Customer Name */}
                <div className="mb-4">
                    <label htmlFor="customer" className="mb-2 block text-sm font-medium">
                        Choose Customer
                    </label>
                    <div className="relative">
                        <select
                            id="customer"
                            name="CustomerID"
                            className="peer block w-full cursor-pointer rounded-md border border-gray-200 py-2 pl-10 text-sm outline-2 placeholder:text-gray-500"
                            value={data.CustomerID}
                            onChange={handleInputChange}
                            aria-describedby="customer-error"
                        >
                            <option value="" disabled>
                                Select a customer
                            </option>
                            {customers?.map(customer =>
                                <option key={customer.CustomerID} value={customer.CustomerID}>
                                    {customer.name}
                                </option>
                            )}
                        </select>
                        <FaUserCircle className="pointer-events-none absolute left-3 top-1/2 h-[18px] w-[18px] -translate-y-1/2 text-gray-500" />
                    </div>
                </div>

                {/* Product Name */}
                <div className="mb-4">
                    <label htmlFor="product" className="mb-2 block text-sm font-medium">
                        Choose Product
                    </label>
                    <div className="relative">
                        <select
                            id="product"
                            name="productId"
                            className="peer block w-full cursor-pointer rounded-md border border-gray-200 py-2 pl-10 text-sm outline-2 placeholder:text-gray-500"
                            value={data.productId}
                            onChange={handleInputChange}
                            aria-describedby="product-error"
                        >
                            <option value="" disabled>
                                Select a Product
                            </option>
                            {products?.map(product =>
                                <option key={product.productId} value={product.productId}>
                                    {product.name}
                                </option>
                            )}
                        </select>
                        <FaUserCircle className="pointer-events-none absolute left-3 top-1/2 h-[18px] w-[18px] -translate-y-1/2 text-gray-500" />
                    </div>
                </div>

                {/* Product Quantity */}
                <div className="mb-4">
                    <label htmlFor="quantity" className="mb-2 block text-sm font-medium">
                        Quantity
                    </label>
                    <div className="relative">
                        <input
                            id="quantity"
                            name="quantity"
                            type="number"
                            value={data.quantity}
                            onChange={handleInputChange}
                            className="peer block w-full cursor-pointer rounded-md border border-gray-200 py-2 pl-10 text-sm outline-2 placeholder:text-gray-500"
                        />
                    </div>
                </div>

                {/* Total Amount */}
                <div className="mb-4">
                    <label htmlFor="amount" className="mb-2 block text-sm font-medium">
                        Total Amount
                    </label>
                    <div className="relative">
                        <input
                            id="amount"
                            name="amount"
                            type="text"
                            value={data.amount.toFixed(2)} // Display total amount with 2 decimal places
                            readOnly
                            className="peer block w-full cursor-not-allowed rounded-md border border-gray-200 py-2 pl-10 text-sm bg-gray-100 outline-2 placeholder:text-gray-500"
                        />
                    </div>
                </div>

                {/* Created At */}
                <div className="mb-4">
                    <label htmlFor="createdAt" className="mb-2 block text-sm font-medium">
                        Created At
                    </label>
                    <div className="relative">
                        <input
                            id="createdAt"
                            name="createdAt"
                            type="date"
                            value={data.createdAt}
                            onChange={handleInputChange}
                            className="peer block w-full cursor-pointer rounded-md border border-gray-200 py-2 pl-10 text-sm outline-2 placeholder:text-gray-500"
                        />
                    </div>
                </div>

                {/* Document paymentStatus */}
                <fieldset>
                    <legend className="mb-2 block text-sm font-medium">
                        Set the document status
                    </legend>
                    <div className="rounded-md border border-gray-200 bg-white px-[14px] py-3">
                        <div className="flex gap-4">
                            <div className="flex items-center">
                                <input
                                    id="pending"
                                    name="paymentStatus"
                                    type="radio"
                                    value="pending"
                                    checked={data.paymentStatus === 'pending'}
                                    onChange={handleInputChange}
                                    className="h-4 w-4 cursor-pointer border-gray-300 bg-gray-100 text-gray-600 focus:ring-2"
                                    aria-describedby="paymentStatus-error"
                                />
                                <label
                                    htmlFor="pending"
                                    className="ml-2 flex cursor-pointer items-center gap-1.5 rounded-full bg-gray-100 px-3 py-1.5 text-xs font-medium text-gray-600"
                                >
                                    Pending
                                </label>
                            </div>
                            <div className="flex items-center">
                                <input
                                    id="paid"
                                    name="paymentStatus"
                                    type="radio"
                                    value="paid"
                                    checked={data.paymentStatus === 'paid'}
                                    onChange={handleInputChange}
                                    className="h-4 w-4 cursor-pointer border-gray-300 bg-gray-100 text-gray-600 focus:ring-2"
                                    aria-describedby="paid-error"
                                />
                                <label
                                    htmlFor="paid"
                                    className="ml-2 flex cursor-pointer items-center gap-1.5 rounded-full bg-green-500 px-3 py-1.5 text-xs font-medium text-white"
                                >
                                    Paid
                                </label>
                            </div>
                        </div>
                    </div>
                </fieldset>
            </div>
            <div className="mt-6 flex justify-end gap-4">
                <Link
                    href="/orders"
                    className="flex h-10 items-center rounded-lg bg-gray-100 px-4 text-sm font-medium text-gray-600 transition-colors hover:bg-gray-200"
                >
                    Cancel
                </Link>
                <button
                    type="submit"
                    className="flex h-10 items-center rounded-lg bg-blue-600 px-4 text-sm font-medium text-white transition-colors hover:bg-blue-700"
                >
                    Create Order Transaction
                </button>
            </div>
        </form>
    );
}

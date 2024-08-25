import { fetchCustomers } from "@/constants/actions/customersActions";
import { Customer } from "@prisma/client";
import { useState } from "react";

export async function useCustomerList() {
    const customers = await fetchCustomers() as Customer[];
    const [currentPage, setCurrentPage] = useState(1);

    const [selectedNumber, setSelectedNumber] = useState<number>(10);

    const itemsPerPage = selectedNumber;

    const handleNumberSelect = (value: number) => {
        setSelectedNumber(value);
    };

    const totalPages = Math.ceil(customers.length / itemsPerPage);

    // Get the customers for the current page
    const currentCustomers = customers.slice(
        (currentPage - 1) * itemsPerPage,
        currentPage * itemsPerPage
    );

    // Handle next button click
    const handleNext = () => {
        setCurrentPage((prevPage) => Math.min(prevPage + 1, totalPages));
    };

    // Handle previous button click
    const handlePrevious = () => {
        setCurrentPage((prevPage) => Math.max(prevPage - 1, 1));
    };

    return {customers, currentPage, itemsPerPage, selectedNumber, handleNumberSelect, currentCustomers, handleNext, handlePrevious}
}
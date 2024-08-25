"use server"
import { NextResponse } from "next/server"
import { db } from "../../../db"
import { Customer } from "@prisma/client"

export async function addCustomers(customer: Omit<Customer, "CustomerID">) {
    try {
        await db?.customer.create({
            data: {
                ...customer
            }
        })
    } catch (error) {
        console.log({ message: "Failed to add Customer to Database" })
    }
}

export async function fetchCustomers() {
    try {
        const customer = await db.customer.findMany()
        return customer
    } catch (error) {
        console.log({message: "Failed to fetch Customers from database"})
    }
}
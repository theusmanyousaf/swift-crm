'use server'

import { db } from "../../../db"

export async function fetchProducts(){
    try {
        const productArray = await db.product.findMany()
        return productArray
    } catch (error) {
        console.log({message: "Failed to fetch Customers from database"})
    }
}
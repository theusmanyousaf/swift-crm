'use server'
import { Product } from "@prisma/client"
import { db } from "../../../db"

export async function addProduct(productData: Omit<Product, "productId" | "createdAt" | "updatedAt">){
    try {
        const res = db.product.create({
            data: {
                ...productData
            }
        })
        console.log("Product Added", res)
        return res;
    } catch (error) {
        return {message: "Failed to Add Product"}
    }
}
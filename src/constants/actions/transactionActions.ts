'use server'

import { Transaction } from "@prisma/client"
import { db } from "../../../db"

export async function createTransaction(transactionData: Omit<Transaction, "TransactionID">) {
    try {
        const res = await db.transaction.create({
            data: {
                ...transactionData
            }
        })
        return res
    } catch (error) {
        console.log(error)
    }
}

export async function fetchTransactions() {
    try {
        const res = await db.transaction.findMany({
            include: {
                customer: {
                    select: {
                        name: true,
                        imageUrl: true
                    }
                },
                product: {
                    select: {
                        name: true,
                        imageUrl: true,
                        category: true,
                        price: true
                    }
                }
            }
        })
        return res
    } catch (error) {
        console.log(error)
    }
}

export async function getTotalQuantityForProduct(productId: string): Promise<number> {
    const totalQuantity = await db.transaction.aggregate({
        _sum: {
            quantity: true,
        },
        where: {
            transactionProducts: {
                some: {
                    productId: productId,
                },
            },
        },
    });

    return totalQuantity._sum.quantity || 0; // Returns 0 if no transactions are found
}
'use server';
import { z } from 'zod';
import { revalidatePath } from 'next/cache';
import { db } from '../../../db';
import { redirect } from 'next/navigation';
import { Document } from '@prisma/client';

export async function createDocument(formData: Omit<Document, "DocumentID" | "createdAt" | "updatedAt">) {

    try {
        const dataUploaded = await db.document.create({
            data: {
                ...formData
            }
        })
        console.log("Server upload", dataUploaded)
    } catch (error) {
        // If a database error occurs, return a more specific error.
        return {
            message: 'Database Error: Failed to Create Document.',
        };
    }

    // Revalidate the cache for the invoices page and redirect the user.
    // revalidatePath('/documents');
    // redirect('/documents');
}

export async function fetchDocuments() {
    try {
        const data = await db.document.findMany({
            include: {
                customer: {
                    select: {
                        name: true,
                        imageUrl: true,
                    },
                },
            },
        })
        return data;
        console.log(data)
    } catch (error) {
        console.log(error)
    }
}

export async function fetchDocument(id: string) {
    try {
        const res = db.document.findUnique({
            where: {
                DocumentID: id
            },
            include: {
                customer: {
                    select: {
                        name: true,
                    },
                },
            },
        })
        return res;
    } catch (error) {
        console.log(error)
    }
}

export async function updateDocument(id: string,formData: Omit<Document, "DocumentID" | "createdAt" | "updatedAt">){
    try {
        const res = await db.document.update({
            where: {
                DocumentID: id
            },
            data: {
                ...formData
            }
        })
        console.log(res)
    } catch (error) {
        console.log(error)
    }
}
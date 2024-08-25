'use server';
import { z } from 'zod';
import { revalidatePath } from 'next/cache';
import { db } from '../../../db';
import { redirect } from 'next/navigation';
import { Document } from '@prisma/client';

// const FormSchema = z.object({
//     id: z.string(),
//     customerId: z.string({
//         invalid_type_error: 'Please select a customer.',
//     }),
//     amount: z.coerce.number().gt(0, { message: 'Please enter an amount greater than $0.' }),
//     status: z.enum(['pending', 'paid'], {
//         invalid_type_error: 'Please select an invoice status.',
//     }),
//     date: z.string(),
// });

// const CreateDocument = FormSchema.omit({ id: true, date: true });
// const UpdateInvoice = FormSchema.omit({ id: true, date: true });

// export type State = {
//     errors?: {
//         customerId?: string[];
//         amount?: string[];
//         status?: string[];
//     };
//     message?: string;
// };

export async function createDocument(formData: Document) {
    const documentData = formData
    // Validate form using Zod
    // const validatedFields = CreateDocument.safeParse({
    //     customerId: formData.get('customerId'),
    //     amount: formData.get('amount'),
    //     status: formData.get('status'),
    // });

    // If form validation fails, return errors early. Otherwise, continue.
    // if (!validatedFields.success) {
    //     return {
    //         errors: validatedFields.error.flatten().fieldErrors,
    //         message: 'Missing Fields. Failed to Create Invoice.',
    //     };
    // }

    // Prepare data for insertion into the database
    // const { customerId, amount, status } = validatedFields.data;
    // const amountInCents = amount * 100;
    // const date = new Date().toISOString().split('T')[0];

    // Insert data into the database
    try {
        const dataUploaded = await db.document.create({
            data: {
                ...documentData
            }
        })
    } catch (error) {
        // If a database error occurs, return a more specific error.
        return {
            message: 'Database Error: Failed to Create Invoice.',
        };
    }

    // Revalidate the cache for the invoices page and redirect the user.
    revalidatePath('/documents');
    redirect('/documents');
}
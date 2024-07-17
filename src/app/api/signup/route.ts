// import bcrypt from 'bcryptjs'
// import { PrismaClient } from '@prisma/client'
// import { NextResponse } from 'next/server'
// import { SignUpValidationSchema } from '@/constants/signUpSchema';
// import { ZodError } from 'zod';

// const prisma = new PrismaClient();

// export async function POST(request: NextResponse) {
//     try {
//         const body = await request.json();
//         const { name, email, password } = await SignUpValidationSchema.parseAsync(body.data)

//         if (!name || !email || !password) {
//             return new NextResponse("Missing name, email or password", { status: 400 });
//         }

//         const exist = await prisma.user.findUnique({
//             where: {
//                 email: email    
//             }
//         })

//         if (exist) {
//             return new Response("user already exist", { status: 400 })
//         }

//         const hashedPassword = await bcrypt.hash(password, 10)

//         const user = await prisma.user.create({
//             data: {
//                 name,
//                 email,
//                 password
//             }
//         });

//         return NextResponse.json(user)
//     } catch (error) {
//         return error instanceof ZodError;
//     }
// }
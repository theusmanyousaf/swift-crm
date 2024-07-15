import bcrypt from 'bcryptjs'
import { PrismaClient } from '@prisma/client'
import { NextResponse } from 'next/server'

const prisma = new PrismaClient();

export async function POST(request: NextResponse) {
    const body = await request.json();
    const { name, email, password } = body.data;

    if (!name || !email || !password) {
        return new NextResponse("Missing name, email or password", { status: 400 });
    }

    const exist = await prisma.user.findUnique({
        where: {
            email: email
        }
    })

    if(exist){
        return new Response("user already exist", {status: 400})
    }

    const hashedPassword = await bcrypt.hash(password, 10)

    const user = await prisma.user.create({
        data: {
            name,
            email,
            hashedPassword
        }
    });

    return NextResponse.json(user)
}
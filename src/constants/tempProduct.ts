import { Product } from "@prisma/client"

export const productData: Omit<Product, "productId" | "createdAt" | "updatedAt">[] = [
    {
        name: "Ceramic Bowl",
        imageUrl: "https://files.edgestore.dev/wyibseim4a9rtydo/publicFiles/_public/4d2e17f5-8c2f-47d0-9474-0bfb9d442957.png",
        category: "Home Goods",
        cost: 20,
        price: 29,
        quantity: 10000
    },
    {
        name: "Ceramic Mug",
        imageUrl: "https://files.edgestore.dev/wyibseim4a9rtydo/publicFiles/_public/7beae46e-0449-4570-9f5c-b9d75599e8a8.png",
        category: "Potterific",
        cost: 38,
        price: 59,
        quantity: 8200
    },
    {
        name: "Vase",
        imageUrl: "https://files.edgestore.dev/wyibseim4a9rtydo/publicFiles/_public/922bf0fe-aebf-49d1-ad9d-9ce270f7b65f.png",
        category: "Flower Child",
        cost: 75,
        price: 99,
        quantity: 0
    },
    {
        name: "Wooden Bowl",
        imageUrl: "https://files.edgestore.dev/wyibseim4a9rtydo/publicFiles/_public/8cab375d-3484-4a23-8828-2a50b2f4e76c.png",
        category: "Wood Co.",
        cost: 22,
        price: 30,
        quantity: 10000
    },
]
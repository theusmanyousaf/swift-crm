import { StaticImageData } from 'next/image'
import CBowl from '/public/assets/bowl.png'
import WBowl from '/public/assets/bowl2.png'
import Mug from '/public/assets/cup.png'
import Vase from '/public/assets/lamp.png'

type productsType = {
    date: string
    image: StaticImageData
    title: string
    category: string
    status: string
    price: number
    orderQuantity?: number
    totalQuantity?: number
}


export const productsOrder: productsType[] = [
    {
        date: 'July 2, 2023',
        image: CBowl,
        title: 'Ceramic Bowl',
        category: 'Home Goods',
        status: 'Available',
        price: 29,
        orderQuantity: 200
    },
    {
        date: 'July 4, 2023',
        image: Mug,
        title: 'Ceramic Mug',
        category: 'Potterific',
        status: 'Available',
        price: 59,
        orderQuantity: 184
    },
    {
        date: 'July 3, 2023',
        image: Vase,
        title: 'Vase',
        category: 'Flower Child',
        status: 'Out of Stock',
        price: 99,
        orderQuantity: 155
    },
    {
        date: 'July 5, 2023',
        image: WBowl,
        title: 'Wooden Bowl',
        category: 'Wood Co.',
        status: 'Available',
        price: 30,
        orderQuantity: 120
    }
]

export const products: productsType[] = [
    {
        date: 'July 2, 2023',
        image: CBowl,
        title: 'Ceramic Bowl',
        category: 'Home Goods',
        status: 'Available',
        price: 29,
        totalQuantity: 20000
    },
    {
        date: 'July 4, 2023',
        image: Mug,
        title: 'Ceramic Mug',
        category: 'Potterific',
        status: 'Available',
        price: 59,
        totalQuantity: 18400
    },
    {
        date: 'July 3, 2023',
        image: Vase,
        title: 'Vase',
        category: 'Flower Child',
        status: 'Out of Stock',
        price: 99,
        totalQuantity: 0
    },
    {
        date: 'July 5, 2023',
        image: WBowl,
        title: 'Wooden Bowl',
        category: 'Wood Co.',
        status: 'Available',
        price: 30,
        totalQuantity: 12000
    }
]
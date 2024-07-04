import Image, { StaticImageData } from 'next/image'
import CBowl from '/public/assets/bowl.png'
import WBowl from '/public/assets/bowl2.png'
import Mug from '/public/assets/cup.png'
import Vase from '/public/assets/lamp.png'

type productsType = {
    image: StaticImageData
    title: string
    category: string
    price: number
}

export default function BestSellingProducts() {

    const products: productsType[] = [
        {
            image: CBowl,
            title: 'Ceramic Bowl',
            category: 'Home Goods',
            price: 29
        },
        {
            image: Mug,
            title: 'Ceramic Mug',
            category: 'Potterific',
            price: 59
        },
        {
            image: Vase,
            title: 'Vase',
            category: 'Flower Child',
            price: 99
        },
        {
            image: WBowl,
            title: 'Wooden Bowl',
            category: 'Wood Co.',
            price: 30
        }
    ]
    return (
        <div className='flex flex-col gap-y-3 p-4 bg-white w-[285px] h-[500px] border rounded-lg pt-5'>
            <h1 className='font-semibold'>Best Selling Products</h1>
            <hr />
            {products.map((product, index) => (
                <div key={index} className='bg-gray-100 rounded-md flex items-center justify-between p-2'>
                    <div className='flex items-center gap-3'>
                        <Image src={product.image} alt='product' className='w-[67px] h-[67px]' />
                        <div className='flex flex-col'><p className='text-xs font-semibold text-purple-800'>{product.title}</p><p className='font-normal text-xs text-gray-400'>{product.category}</p></div>
                    </div>
                    <p className='text-xs font-semibold text-purple-800'>${product.price}</p>
                </div>
            ))
            }
        </div>
    )
}

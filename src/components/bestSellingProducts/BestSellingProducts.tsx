'use client'
import Image from 'next/image'
import { products } from '@/constants/bestSellingProducts'
import { usePathname } from 'next/navigation'

export default function BestSellingProducts() {
    const pathname = usePathname()
    return (
        pathname == '/dashboard'
            ? <div className='flex flex-col gap-y-3 p-4 bg-white border rounded-lg pt-5 mt-5 md:mt-0 mx-11 sm:mx-0'>
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
            : <div className='flex flex-col gap-y-3 px-4 bg-white w-full border rounded-lg pt-5 pb-6'>
                <h1 className='font-semibold'>Best Selling Products</h1>
                <hr />
                <div className='flex justify-between p-2 pr-6 text-sm font-semibold bg-purple-100 rounded-md gap-6'>
                    <h1 className='py-[5.5px] flex-1'>Produnct Name</h1>
                    <h1 className='py-[5.5px] flex-1'>Total Order</h1>
                    <h1 className='py-[5.5px] flex-1'>Status</h1>
                    <h1 className='py-[5.5px]'>Price</h1>
                </div>
                {products.map((product, index) => (
                    <div key={index} className='flex items-center p-2 justify-between gap-6'>
                        <div className='flex items-center gap-2 flex-1'>
                            <Image src={product.image} alt='product' className='w-8 h-8' />
                            <div className='flex flex-col'><p className='text-xs font-semibold text-purple-800'>{product.title}</p><p className='font-normal text-xs text-gray-400'>{product.category}</p></div>
                        </div>
                        <div className='flex flex-col justify-start flex-1'>
                            <p className='text-sm font-medium h-[18px]'>{product.quantity} pcs</p>
                            <p className='text-sm font-medium text-gray-500 h-[18px]'>{product.date}</p>
                        </div>
                        <div className='justify-start flex-1'>
                            <span className={`px-2 py-1 rounded-full text-xs font-bold ${product.status === 'Available' ? 'bg-lime-100 text-lime-600' : 'bg-red-100 text-red-600'}`}>
                                {product.status}
                            </span>
                        </div>
                        <p className='text-sm font-medium text-gray-500 pr-6'>${product.price}</p>
                    </div>
                ))
                }
            </div>
    )
}

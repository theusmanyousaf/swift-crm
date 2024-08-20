'use client'
import Image from 'next/image'
import { productsOrder } from '@/constants/bestSellingProducts'
import { usePathname } from 'next/navigation'

export default function BestSellingProducts() {
    const pathname = usePathname()
    return (
        pathname == '/dashboard'
            ? <div className='flex flex-col xl:gap-y-3 gap-y-[9.8px] xl:px-4 px-[13px] xl:pt-6 pt-5 pb-4 bg-white border rounded-lg mt-5 md:mt-0 mx-[10.28%] md:mx-0 min-w-[233px] xl:min-w-[285px] xl:w-full'>
                <h1 className='font-semibold xl:text-base text-[13px]'>Best Selling Products</h1>
                <hr />
                {productsOrder.map((product, index) => (
                    <div key={index} className='bg-gray-100 rounded-md flex items-center justify-between xl:p-2 p-[6.5px]'>
                        <div className='flex items-center gap-3'>
                            <Image src={product.image} alt='product' className='xl:w-[67px] xl:h-[67px] w-[55px] h-[55px]' />
                            <div className='flex flex-col xl:gap-2 gap-[6.5px] text-xs'><p className='font-albert-sans font-semibold text-purple-800'>{product.title}</p><p className='text-gray-400'>{product.category}</p></div>
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
                {productsOrder.map((product, index) => (
                    <div key={index} className='flex items-center p-2 justify-between gap-6'>
                        <div className='flex items-center gap-2 flex-1'>
                            <Image src={product.image} alt='product' className='w-8 h-8' />
                            <div className='flex flex-col'><p className='text-xs font-semibold text-purple-800'>{product.title}</p><p className='font-normal text-xs text-gray-400'>{product.category}</p></div>
                        </div>
                        <div className='flex flex-col justify-start flex-1'>
                            <p className='text-sm font-medium h-[18px]'>{product.orderQuantity} pcs</p>
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

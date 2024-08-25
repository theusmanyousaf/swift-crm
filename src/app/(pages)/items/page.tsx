import Image from 'next/image'
import { products } from '@/constants/bestSellingProducts'
import Header from '@/components/header/Header'

export default function Products() {
    return (
        <div className='lg:ml-10 w-full'>
            <Header title='Products'/>
            <div className='flex flex-col gap-y-3 px-4 bg-white w-full border rounded-lg pt-5 pb-6 lg:mt-11'>
                <div className='flex justify-between p-2 pr-6 text-sm font-semibold bg-purple-100 rounded-md gap-6'>
                    <h1 className='py-[5.5px] flex-1'>Product Name</h1>
                    <h1 className='py-[5.5px] flex-1'>Total Quantity</h1>
                    <h1 className='py-[5.5px] flex-1'>Status</h1>
                    <h1 className='py-[5.5px]'>Price</h1>
                </div>
                {products.map((product, index) => (
                    <div key={index} className='flex items-center p-2 justify-between gap-6 bg-gray-100 rounded-md'>
                        <div className='flex items-center gap-4 flex-1'>
                            <Image src={product.image} alt='product' className='w-20 h-20' />
                            <div className='flex flex-col'><p className='font-semibold text-purple-800'>{product.title}</p><p className='text-gray-500'>{product.category}</p></div>
                        </div>
                        <div className='flex flex-col justify-start flex-1'>
                            <p className='font-semibold font-albert-sans h-[18px]'>{product.totalQuantity} pcs</p>
                        </div>
                        <div className='justify-start flex-1'>
                            <span className={`px-2 py-1 rounded-full font-bold ${product.status === 'Available' ? 'bg-lime-100 text-lime-600' : 'bg-red-100 text-red-600'}`}>
                                {product.status}
                            </span>
                        </div>
                        <p className='font-semibold font-albert-sans pr-6'>${product.price}</p>
                    </div>
                ))}
            </div>
        </div>
    )
}
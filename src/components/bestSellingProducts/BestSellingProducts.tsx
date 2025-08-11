'use client'
import Image from 'next/image'
import { usePathname } from 'next/navigation'
import { RootState, useAppDispatch } from '@/store/store'
import { useSelector } from 'react-redux'
import { fetchTransactionsAsync } from '@/store/slices/transactionsSlice'
import { useEffect } from 'react'
import { fetchProductsAsync } from '@/store/slices/productsSlice'

export default function BestSellingProducts() {
    const dispatch = useAppDispatch();
    const { transactions } = useSelector((state: RootState) => state.transactions); 
    const {products, error, status} = useSelector((state: RootState)=> state.products);
    useEffect(() => {
        dispatch(fetchTransactionsAsync());
        dispatch(fetchProductsAsync());
    }, [dispatch]);

    if (status === 'loading') {
        return <div>Loading...</div>;
    }

    if (status === 'failed') {
        return <div>Error: {error}</div>;
    }

    const pathname = usePathname();

    return (
        pathname === '/dashboard'
            ? <div className='flex flex-col xl:gap-y-3 gap-y-[9.8px] xl:px-4 px-[13px] xl:pt-6 pt-5 pb-4 bg-white border rounded-lg mt-5 md:mt-0 mx-[10.28%] md:mx-0 min-w-[233px] xl:min-w-[285px] 2xl:w-full'>
                <h1 className='font-semibold xl:text-base text-[13px]'>Best Selling Products</h1>
                <hr />
                {products?.map((product) => (
                    <div key={product.productId} className='bg-gray-100 rounded-md flex items-center justify-between xl:p-2 p-[6.5px]'>
                        <div className='flex items-center gap-3'>
                            <Image src={product.imageUrl} alt='product' width={120} height={120} className='xl:w-[67px] xl:h-[67px] w-[55px] h-[55px] rounded-md' />
                            <div className='flex flex-col xl:gap-2 gap-[6.5px] text-xs'><p className='font-albert-sans font-semibold text-purple-800'>{product.name}</p><p className='text-gray-400'>{product.category}</p></div>
                        </div>
                        <p className='text-xs font-semibold text-purple-800'>${product.price}</p>
                    </div>
                ))}
            </div>
            : <div className='flex flex-col gap-y-3 px-4 bg-white border rounded-lg pt-5 pb-6 mx-[10.28%] md:mx-0 overflow-x-auto'>
                <h1 className='font-semibold'>Best Selling Products</h1>
                <hr className='xl:w-[599px] w-[497px]' />
                <div className='flex justify-between p-2 pr-6 text-sm font-semibold bg-purple-100 rounded-md gap-6 xl:w-[599px] w-[497px]'>
                    <h1 className='py-[5.5px] flex-1 xl:min-w-[188px] min-w-[157px]'>Product Name</h1>
                    <h1 className='py-[5.5px] flex-1 xl:min-w-[150px] min-w-[124.5px]'>Total Order</h1>
                    <h1 className='py-[5.5px] flex-1 xl:min-w-[107px] min-w-[88.8px] '>Status</h1>
                    <h1 className='py-[5.5px] xl:min-w-[66px] min-w-[55px]'>Price</h1>
                </div>
                {transactions?.map((transaction) => (
                    <div key={transaction.productId} className='flex items-center p-2 justify-between gap-6 xl:w-[599px] w-[497px]'>
                        <div className='flex items-center gap-2 flex-1 xl:min-w-[188px] min-w-[157px]'>
                            <Image src={transaction.product.imageUrl} width={120} height={120} alt='product' className='w-8 h-8' />
                            <div className='flex flex-col'><p className='text-xs font-semibold text-purple-800'>{transaction.product.name}</p><p className='font-normal text-xs text-gray-400'>{transaction.product.category}</p></div>
                        </div>
                        <div className='flex flex-col justify-start flex-1 xl:min-w-[150px] min-w-[124.5px]'>
                            <p className='text-sm font-medium h-[18px]'>{transaction.quantity} pcs</p>
                            <p className='text-sm font-medium text-gray-500 h-[18px]'>{transaction.createdAt}</p>
                        </div>
                        <div className='justify-start flex-1 xl:min-w-[107px] min-w-[88.8px]'>
                            <span className={`px-2 py-1 rounded-full text-xs font-bold ${transaction.quantity !== 0 ? 'bg-lime-100 text-lime-600' : 'bg-red-100 text-red-600'}`}>
                                {transaction.quantity !== 0 ? 'Available' : 'Out of Stock'}
                            </span>
                        </div>
                        <p className='text-sm font-medium text-gray-500 pr-6 xl:min-w-[66px] min-w-[55px]'>${transaction.product.price}</p>
                    </div>
                )).slice(0,4)}
            </div>
    )
}

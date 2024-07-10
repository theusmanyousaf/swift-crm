import Image from 'next/image'
import Graph from '/public/assets/GraphCountry.png'

export default function SalesPerCountry() {
    return (
        <div className='flex flex-col gap-3 bg-white border rounded-lg py-6 px-4'>
            <h1 className='font-semibold'>Sales Per Country <span className='font-semibold text-gray-300'>(9,234 Sales)</span></h1>
            <hr />
            <Image src={Graph} alt='graph' />
        </div>
    )
}

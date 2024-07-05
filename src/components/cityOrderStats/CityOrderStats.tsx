import Image from 'next/image'
import Map from '/public/assets/map.png'

export default function CityOrderStats() {
  return (
    <div className='flex flex-col border rounded-lg px-4 py-6 bg-white gap-3 min-w-[285px]'>
        <h1 className='font-semibold'>City Order Statistics</h1>
        <hr />
        <Image src={Map} alt='Map' className='h-[401px] w-[253px]'/>
    </div>
  )
}

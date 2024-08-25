import Image from 'next/image'
import Map from '/public/assets/map.png'

export default function CityOrderStats() {
  return (
    <div className='flex flex-col border rounded-lg xl:px-4 px-3.5 py-5 xl:py-6 xl:gap-y-3 gap-y-[9.8px] bg-white lg:min-w-[233px] lg:max-w-[233px] xl:min-w-[285px] mx-[10.28%] md:mx-0'>
        <h1 className='font-semibold'>City Order Statistics</h1>
        <hr className='block'/>
        <Image src={Map} alt='Map'/>
    </div>
  )
}

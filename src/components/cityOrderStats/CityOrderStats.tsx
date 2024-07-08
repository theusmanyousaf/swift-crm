import Image from 'next/image'
import Map from '/public/assets/map.png'

export default function CityOrderStats() {
  return (
    <div className='flex flex-col border rounded-lg px-4 py-6 bg-white w-full'>
        <h1 className='font-semibold'>City Order Statistics</h1>
        <hr className='my-3'/>
        <Image src={Map} alt='Map'/>
    </div>
  )
}

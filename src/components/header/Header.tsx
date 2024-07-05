import Avatar from '/public/assets/avatar.png'
import Image from 'next/image'
import DatePicker from '../datePicker/DatePicker'

export default function Header() {
    return (
        <div className="flex justify-between mt-10 items-center mb-3.5">
            <h1 className="font-bold text-[32px]">Customers</h1>
            <div className='flex items-center gap-4'>
                <DatePicker />
                <div className='flex items-center gap-2'>
                    <Image src={Avatar} alt="Avatar" className="xl:w-[53px] xl:h-[53px] w-11 h-11" />
                    <div className='font-bold text-[13px] xl:text-base'>Sophia Chester</div>
                </div>
            </div>
        </div>
    )
}

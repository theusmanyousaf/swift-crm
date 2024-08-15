import Avatar from '/public/assets/avatar.png'
import Image from 'next/image'
import DatePickerWithRange from '../datePickerWithRange/DatePickerWithRange'

export default function Header({title}:{title: string}) {
    return (
        <div className="flex md:flex-row flex-col-reverse justify-between mt-10 md:items-center mb-3.5">
            <h1 className="font-bold text-[32px]">{title}</h1>
            <div className='flex items-center gap-4'>
                <DatePickerWithRange />
                <div className='flex items-center gap-2'>
                    <Image src={Avatar} alt="Avatar" className="xl:w-[53px] xl:h-[53px] w-11 h-11" />
                    <div className='font-bold text-[13px] xl:text-base'>Sophia Chester</div>
                </div>
            </div>
        </div>
    )
}
